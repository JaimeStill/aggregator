import {
    AfterContentInit,
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';

import { Observable } from 'rxjs';
import { CoreService } from '../../services';

@Component({
    selector: 'home-route',
    templateUrl: 'home.route.html'
})
export class HomeRoute implements AfterContentInit {
    selected: any = null;
    search$: Observable<string>;

    @ViewChild('searchbar', { static: true }) searchbar: ElementRef;

    constructor(
        private core: CoreService
    ) { }

    ngAfterContentInit(): void {
        this.search$ = this.core.generateInputObservable(this.searchbar);
    }

    select = (item: any) => this.selected = item;

    clearSelection = () => this.selected = null;
}
