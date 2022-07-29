import {
    Observable,
    Subscription
} from 'rxjs';

import {
    Swapi,
    SwapiQuery
} from '../../../models';

import { HttpClient } from '@angular/common/http';
import { SnackerService } from '../../../services';

export abstract class SwapiAggregator<T extends Swapi> {
    protected sub: Subscription;

    query: SwapiQuery<T>;

    constructor(
        protected http: HttpClient,
        protected snacker: SnackerService,
        protected endpoint: string
    ) {
        this.query = new SwapiQuery<T>(http, snacker);
        this.query.endpoint = endpoint;
    }

    initSub = (search: Observable<string>) =>
        this.sub = search.subscribe({
            next: (term: string) =>
                this.query.search = term?.length > 0
                    ? term
                    : null
        });

    setEndpoint = (url: string) => this.query.endpoint = url;
}
