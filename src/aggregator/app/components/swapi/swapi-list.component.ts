import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

import {
    Swapi,
    SwapiResult
} from '../../models';

@Component({
    selector: 'swapi-list',
    templateUrl: 'swapi-list.component.html'
})
export class SwapiListComponent<T extends Swapi> {
    @Input() result: SwapiResult<T>;
    @Input() render: (data: T) => string;
    @Output() next = new EventEmitter<string>();
    @Output() previous = new EventEmitter<string>();
    @Output() action = new EventEmitter<T>();
}
