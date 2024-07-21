import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/api/users/';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }

  getUserById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}${id}`);
  }

  createUser(userData: { name: string; email: string }): Observable<any> {
    return this.httpClient.post<any>(this.url, userData);
  }

  updateUser(id: number, user: { name: string; email: string }): Observable<any> {
    return this.httpClient.put<any>(`${this.url}${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}${id}`);
  }
}
