import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Starship } from '../../../models';
import { SnackerService } from '../../../services';
import { SwapiAggregator } from './swapi.aggregator';

@Component({
    selector: 'starship-aggregator',
    templateUrl: 'starship.aggregator.html'
})
export class StarshipAggregator extends SwapiAggregator<Starship> implements OnInit, OnDestroy {
    @Input() search: Observable<string>;
    @Output() action = new EventEmitter<Starship>();

    render = (starship: Starship) => `${starship.name} - ${starship.model}`;

    constructor(
        protected http: HttpClient,
        protected snacker: SnackerService
    ) {
        super(http, snacker, 'starships');
    }

    ngOnInit(): void {
        this.initSub(this.search);
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
