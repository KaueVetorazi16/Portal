import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Municao } from '../_models/Municao';

@Injectable({
  providedIn: 'root'
})
export class MunicaoService {

  baseUrl = 'http://localhost:5000/portal/municao';
    
  constructor(private http: HttpClient) { 
      
  }
  
      getAllMunicao(): Observable<Municao[]> {
          return this.http.get<Municao[]>(this.baseUrl); 
      }
      getMunicaoByMarca(marca: string): Observable<Municao[]> {
          return this.http.get<Municao[]>(`${this.baseUrl}/getByMarca/${marca}`);
      }
      getMunicaoById(id: number): Observable<Municao> {
          return this.http.get<Municao>(`${this.baseUrl}/${id}`);
      }
  
      postMunicao(municao: Municao){
          return this.http.post(this.baseUrl, municao);
      } 
  
      putMunicao(municao: Municao){
          return this.http.put(`${this.baseUrl}/${municao.id}`, municao);
      }
  
      deleteMunicao(id: number){
          return this.http.delete(`${this.baseUrl}/${id}`);
      }
  
      postUpload(file: File, name: string){
  
          const fileToUpload = <File>file[0];
          const formData = new FormData();
          formData.append('file', fileToUpload, name);
          return this.http.post(`${this.baseUrl}/upload`, formData);
      }
  }
  
