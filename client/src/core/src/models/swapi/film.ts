import { Swapi } from './swapi';

export interface Film extends Swapi {
    title: string;
    episode_id: string;
    opening_crawl: string;
    directory: string;
    producer: string;
    release_date: Date;
    characters: string[];
    planets: string[];
    species: string[];
    starships: string[];
    vehicles: string[];
}
