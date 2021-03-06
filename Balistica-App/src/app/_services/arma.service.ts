import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arma } from '../_models/Arma';

@Injectable({
    providedIn: 'root'
})
export class ArmaService {

    //URL da web api escrita em .Net Core (Balistica.API)
    baseUrl = 'http://localhost:5000/portal/arma';
    
// Injeção de depêndencia http
constructor(private http: HttpClient) { 
    
}

    getAllArma(): Observable<Arma[]> {
        return this.http.get<Arma[]>(this.baseUrl);
    }
    getArmaByMarca(marca: string): Observable<Arma[]> {
        return this.http.get<Arma[]>(`${this.baseUrl}/getByMarca/${marca}`);
    }
    getArmaById(id: number): Observable<Arma> {
        return this.http.get<Arma>(`${this.baseUrl}/${id}`);
    }

    postArma(arma: Arma){
        return this.http.post(this.baseUrl, arma);
    } 

    putArma(arma: Arma){
        return this.http.put(`${this.baseUrl}/${arma.id}`, arma);
    }

    deleteArma(id: number){
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    postUpload(file: File, name: string){

        const fileToUpload = <File>file[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, name);
        return this.http.post(`${this.baseUrl}/upload`, FormData);
    }
}
