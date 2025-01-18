import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit'; // Assure-toi que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private apiUrl = 'http://localhost:3000/api/produits'; // L'URL de ton API backend

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les produits
  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiUrl}/get`);
  }

  // Méthode pour ajouter un produit
  addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.apiUrl}/add`, produit);
  }

  
}
