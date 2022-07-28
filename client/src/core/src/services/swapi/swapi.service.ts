import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
    Swapi,
    SwapiResult,
    SwapiEndpoints
} from '../../models';

@Injectable({
    providedIn: 'root'
})
export class SwapiService {
    readonly api: string = 'https://swapi.dev/api/';

    constructor(
        public http: HttpClient
    ) { }

    endpoints = this.http.get<SwapiEndpoints>(this.api);

    endpointsAsync = (): Promise<SwapiEndpoints> => new Promise((resolve, reject) =>
        this.endpoints
            .subscribe({
                next: (data: SwapiEndpoints) => resolve(data),
                error: (err: any) => reject(err)
            })
    );

    get = <T extends Swapi>(endpoint: string): Observable<SwapiResult<T>> =>
        this.http.get<SwapiResult<T>>(endpoint);

    search = <T extends Swapi>(endpoint: string, term: string): Observable<SwapiResult<T>> =>
        this.http.get<SwapiResult<T>>(`${endpoint}?search=${term}`);

    retrieve = <T extends Swapi>(url: string) =>
        this.http.get<T>(url);

    retrieveAsync = <T extends Swapi>(url: string): Promise<T> => new Promise((resolve, reject) =>
        this.retrieve<T>(url)
            .subscribe({
                next: (data: T) => resolve(data),
                error: (err: any) => reject(err)
            })
    );
}
