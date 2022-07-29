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
import { Film } from '../../../models';
import { SnackerService } from '../../../services';
import { SwapiAggregator } from './swapi.aggregator';

@Component({
    selector: 'film-aggregator',
    templateUrl: 'film.aggregator.html'
})
export class FilmAggregator extends SwapiAggregator<Film> implements OnInit, OnDestroy {
    @Input() search: Observable<string>;
    @Output() action = new EventEmitter<Film>();

    render = (film: Film) => film.title;

    constructor(
        protected http: HttpClient,
        protected snacker: SnackerService
    ) {
        super(http, snacker, 'films');
    }

    ngOnInit(): void {
        this.initSub(this.search);
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
