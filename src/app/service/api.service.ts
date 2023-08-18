import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.BACKEND_URL + 'api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    ) { }

  getTours(data: any): Observable<any> {
    const body = {...data}
    return this.http.post(`${API}/get-tours`, body);
  }

  getTour(data: any): Observable<any> {
    const body = {...data}
    return this.http.post(`${API}/get-tour`, body);
  }
}
