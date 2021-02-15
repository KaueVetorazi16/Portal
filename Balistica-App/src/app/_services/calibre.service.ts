import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calibre } from '../_models/Calibre';

@Injectable({
  providedIn: 'root'
})
export class CalibreService {

  baseUrl = 'http://localhost:5000/portal/calibre';
    
constructor(private http: HttpClient) { 
    
}

    getAllCalibre(): Observable<Calibre[]> {
        return this.http.get<Calibre[]>(this.baseUrl);
    }
    getCalibreByNominal(nominal: string): Observable<Calibre[]> {
        return this.http.get<Calibre[]>(`${this.baseUrl}/getByNominal/${nominal}`);
    }
    getCalibreById(id: number): Observable<Calibre> {
        return this.http.get<Calibre>(`${this.baseUrl}/${id}`);
    }

    postCalibre(calibre: Calibre){
        return this.http.post(this.baseUrl, calibre);
    } 

    putCalibre(calibre: Calibre){
        return this.http.put(`${this.baseUrl}/${calibre.id}`, calibre);
    }

    deleteCalibre(id: number){
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    postUpload(file: File, name: string){

        const fileToUpload = <File>file[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, name);
        return this.http.post(`${this.baseUrl}/upload`, FormData);
    }
}
