import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	

  private baseUrl: string = environment.apiUrl+'/api/users';	
	
  //private baseUrl = environment.apiUrl; // Spring Boot backend URL
	
  //private baseUrl = 'http://localhost:8080/api/users'; // Spring Boot backend URL

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getUser(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<any>(url, user);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}