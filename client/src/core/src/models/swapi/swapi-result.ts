import { Swapi } from './swapi';

export interface SwapiResult<T extends Swapi> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}
