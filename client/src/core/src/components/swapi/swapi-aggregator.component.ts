import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';

import {
    Observable,
    Subscription
} from 'rxjs';

import {
    Swapi,
    SwapiResult
} from '../../models';

import { SwapiService } from '../../services';

@Component({
    selector: 'swapi-aggregator',
    templateUrl: 'swapi-aggregator.component.html',
    providers: [ SwapiService ]
})
export class SwapiAggregatorComponent<T extends Swapi> implements OnInit, OnDestroy {
    sub: Subscription;
    result$: Observable<SwapiResult<T>>;
    expanded: boolean = false;

    @Input() name: string = 'Aggregator';
    @Input() url: string;
    @Input() search: Observable<string>;
    @Output() select = new EventEmitter<T>();

    constructor(
        public swapi: SwapiService
    ) { }

    ngOnInit(): void {
        this.result$ = this.swapi.get(this.url);

        this.sub = this.search?.subscribe({
            next: (term: string) =>
                this.result$ = term?.length > 0
                    ? this.swapi.search(this.url, term)
                    : this.swapi.get(this.url)
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    toggleExpanded = () => this.expanded = !this.expanded;
}
