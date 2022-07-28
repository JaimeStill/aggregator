import {
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';

import {
    CoreService,
    SwapiEndpoints,
    SwapiService
} from 'core';

import { Observable } from 'rxjs';

@Component({
    selector: 'home-route',
    templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
    endpoints: SwapiEndpoints;
    search$: Observable<string>;

    @ViewChild('searchbar') searchbar: ElementRef;

    constructor(
        private core: CoreService,
        public swapi: SwapiService
    ) { }

    async ngOnInit(): Promise<void> {
        this.endpoints = await this.swapi.endpointsAsync();
    }

    ngAfterViewInit(): void {
        this.search$ = this.core.generateInputObservable(this.searchbar);
    }
}
