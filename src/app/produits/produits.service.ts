import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Produits } from './produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http: HttpClient) { }
  get(){
    return this.http.get<Produits[]>('http://localhost:8080/produits');
  }
  create(payload: Produits){
    return this.http.post<Produits>('http://localhost:8080/produits',payload);
  }

  getById(id: number){
    return this.http.get<Produits>(`http://localhost:8080/produits/${id}`);
  }
  update(payload: Produits){
    return this.http.put(`http://localhost:8080/produits`,payload);
  }
  delete(id: number){
    return this.http.delete<Produits>(`http://localhost:8080/produits/${id}`);
  }
}
