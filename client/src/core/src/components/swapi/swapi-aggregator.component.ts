import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

import {
    Swapi,
    SwapiResult
} from '../../models';

import { Observable } from 'rxjs';
import { SwapiService } from '../../services';

@Component({
    selector: 'swapi-aggregator',
    templateUrl: 'swapi-aggregator.component.html',
    providers: [ SwapiService ]
})
export class SwapiAggregatorComponent<T extends Swapi> implements OnInit {
    result$: Observable<SwapiResult<T>>;
    expanded: boolean = false;

    @Input() name: string = 'Aggregator';
    @Input() url: string;
    @Output() select = new EventEmitter<T>();

    constructor(
        public swapi: SwapiService
    ) { }

    ngOnInit(): void {
        this.result$ = this.swapi.get(this.url);
    }

    toggleExpanded = () => this.expanded = !this.expanded;
}
