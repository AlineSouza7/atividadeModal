import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private httpClient: HttpClient) {
    }

    getTags(): Observable<{message: object}> {
        return this.httpClient.get<{message: object}>('https://randomfox.ca/floof/')
    }

    getGatos(): Observable<string[]> {
        return this.httpClient.get<string[]>('https://cataas.com/api/tags')
    }

    
}

