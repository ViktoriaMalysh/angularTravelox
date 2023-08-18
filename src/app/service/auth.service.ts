import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/interfaces/user';

const API = environment.BACKEND_URL + 'auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  signUp(user: User): Observable<any> {
    const body = {...user}
    return this.http.post(`${API}/sign-up`, body);
  }

  signIn(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(`${API}/sign-in`, body);
  }
}
