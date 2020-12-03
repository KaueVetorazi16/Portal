import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arma } from '../_models/Arma';

@Injectable({
    providedIn: 'root'
})
export class ArmaService {

    baseUrl = 'http://localhost:5000/portal/arma';

constructor(private http: HttpClient) { }

    getAllArma(): Observable<Arma[]> {
        return this.http.get<Arma[]>(this.baseUrl);
    }
    getArmaByMarca(marca: string): Observable<Arma[]> {
        return this.http.get<Arma[]>(`${this.baseUrl}/getByMarca/${marca}`);
    }
    getArmaById(id: number): Observable<Arma> {
        return this.http.get<Arma>(`${this.baseUrl}/${id}`);
    }
}
