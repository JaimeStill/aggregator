import {
    Component,
    OnInit
} from '@angular/core';

import {
    SwapiEndpoints,
    SwapiService
} from 'core';

@Component({
    selector: 'home-route',
    templateUrl: 'home.route.html'
})
export class HomeRoute implements OnInit {
    endpoints: SwapiEndpoints;

    constructor(
        public swapi: SwapiService
    ) { }

    async ngOnInit(): Promise<void> {
        this.endpoints = await this.swapi.endpointsAsync();
    }
}
