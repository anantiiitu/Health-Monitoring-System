import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthDataService {
  private apiUrl = 'http://localhost:3000/health'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getHealthData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
