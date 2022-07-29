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
import { Person } from '../../../models';
import { SnackerService } from '../../../services';
import { SwapiAggregator } from './swapi.aggregator';

@Component({
    selector: 'people-aggregator',
    templateUrl: 'people.aggregator.html'
})
export class PeopleAggregator extends SwapiAggregator<Person> implements OnInit, OnDestroy {
    @Input() search: Observable<string>;
    @Output() action = new EventEmitter<Person>();

    render = (person: Person) => person.name;

    constructor(
        protected http: HttpClient,
        protected snacker: SnackerService
    ) {
        super(http, snacker, 'people');
    }

    ngOnInit(): void {
        this.initSub(this.search);
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
