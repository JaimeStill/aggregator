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
import { Species } from '../../../models';
import { SnackerService } from '../../../services';
import { SwapiAggregator } from './swapi.aggregator';

@Component({
    selector: 'species-aggregator',
    templateUrl: 'species.aggregator.html'
})
export class SpeciesAggregator extends SwapiAggregator<Species> implements OnInit, OnDestroy {
    @Input() search: Observable<string>;
    @Output() action = new EventEmitter<Species>();

    render = (species: Species) => species.name;

    constructor(
        protected http: HttpClient,
        protected snacker: SnackerService
    ) {
        super(http, snacker, 'species');
    }

    ngOnInit(): void {
        this.initSub(this.search);
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
