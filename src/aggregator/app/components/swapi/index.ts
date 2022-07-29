import { SwapiAggregators } from './aggregators';
import { SwapiAggregatorComponent } from './swapi-aggregator.component';
import { SwapiListComponent } from './swapi-list.component';

export const SwapiComponents = [
    ...SwapiAggregators,
    SwapiAggregatorComponent,
    SwapiListComponent
];
