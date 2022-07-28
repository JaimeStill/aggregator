import { Film } from './film';
import { Swapi } from './swapi';

export interface Planet extends Swapi {
    name: string;
    diameters: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
    films: Film[];
    residents: string[];
}
