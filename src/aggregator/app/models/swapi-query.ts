import {
    throwError,
    ReplaySubject,
    Subject,
    Subscription
} from 'rxjs';

import {
    catchError,
    filter,
    switchMap
} from 'rxjs/operators';

import {
    Swapi,
    SwapiResult
} from './swapi';

import { HttpClient } from '@angular/common/http';
import { SnackerService } from '../services';

export class SwapiQuery<T extends Swapi> {
    private readonly baseUrl: string = 'https://swapi.dev/api/';

    private url = new Subject<URL>();
    private result = new ReplaySubject<SwapiResult<T>>(1);
    private sub: Subscription;

    private initUrl = (): Subscription =>
        this.url
            .pipe(
                filter(url => !!url),
                switchMap((url: URL) =>
                    this.http.get<SwapiResult<T>>(url.toString())
                        .pipe(
                            catchError(er => throwError(() => new Error(er)))
                        )
                ),
                filter(r => !!r)
            )
            .subscribe({
                next: result => this.result.next(result),
                error: err => this.snacker.sendErrorMessage(err)
            });

    constructor(
        private http: HttpClient,
        private snacker: SnackerService
    ) {
        this.sub = this.initUrl();
    }

    result$ = this.result.asObservable();
    unsubscribe = () => this.sub?.unsubscribe();

    private _endpoint: string = null;
    get endpoint(): string { return this._endpoint; }
    set endpoint(value: string) {
        const url = new URL(value, this.baseUrl);

        if (this.baseUrl.startsWith(url.origin)) {
            if (url.toString() !== this._endpoint) {
                this._endpoint = url.toString();
                this.refresh();
            }
        }
    }

    private _search: string | null = null;
    get search(): string | null {
        return this._search;
    }
    set search(value: string | null) {
        if (value !== this._search) {
            this._search = value;
            this.refresh(true);
        }
    }

    refresh = (repage: boolean = false) => {
        this.clear();

        const url = new URL(this.endpoint, this.baseUrl);

        if (repage)
            url.searchParams.set('page', '1');

        if (this.search)
            url.searchParams.set('search', this.search);
        else
            url.searchParams.delete('search');

        this.url.next(url);
        this._endpoint = url.toString();
    }

    clear = () => this.result.next(null);
}
