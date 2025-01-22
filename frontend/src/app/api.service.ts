import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './shared/model/produit';
import { environment } from '../environments/environment';
import { authResponse } from './auth/authResponse';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) {}

    public getProduits () : Observable<Produit[]> {
      return this.http.get<Produit[]>(environment.backendProduit);
    }

    public register(username: string, password: string): Observable<any> {
      const body = { login:username, pass:password };
      return this.http.post(environment.backendRegister, body);
    }
  
    public loginClient(login: string, password: string): Observable<authResponse> {
      let data: String;
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      };
      data = 'login=' + login + '&password=' + password;
      return this.http.post<authResponse>(
        environment.backendLogin,
        data,
        httpOptions
      );
    }
  
    public getCurrentUser(): Observable<any> {
      return this.http.get<any>(environment.backendUser);
    }
  
    public updateUser(updatedUser: any): Observable<any> {
      return this.http.put<any>(environment.backendUser, updatedUser);
    }
    
}
