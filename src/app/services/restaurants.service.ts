import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurants } from '../interfaces/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  apiUrl = 'http://localhost:3000/restaurants'

  constructor(private http: HttpClient) { }

  all(): Observable<Restaurants[]> {
    return this.http.get<Restaurants[]>(this.apiUrl)
  }

  create(data: any): Observable<Restaurants[]> {
    return this.http.post<Restaurants[]>(this.apiUrl, data)
  }

  get(id: number): Observable<Restaurants>{
    return this.http.get<Restaurants>(`${this.apiUrl}/${id}`)
  }
  update(id: number, data: any): Observable<Restaurants> {
    return this.http.put<Restaurants>(`${this.apiUrl}/${id}`, data)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
