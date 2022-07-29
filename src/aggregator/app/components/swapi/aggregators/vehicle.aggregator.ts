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
import { Vehicle } from '../../../models';
import { SnackerService } from '../../../services';
import { SwapiAggregator } from './swapi.aggregator';

@Component({
    selector: 'vehicle-aggregator',
    templateUrl: 'vehicle.aggregator.html'
})
export class VehicleAggregator extends SwapiAggregator<Vehicle> implements OnInit, OnDestroy {
    @Input() search: Observable<string>;
    @Output() action = new EventEmitter<Vehicle>();

    render = (vehicle: Vehicle) => `${vehicle.name} - ${vehicle.model}`;

    constructor(
        protected http: HttpClient,
        protected snacker: SnackerService
    ) {
        super(http, snacker, 'vehicles');
    }

    ngOnInit(): void {
        this.initSub(this.search);
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
