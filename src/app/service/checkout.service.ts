import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CheckoutSession } from '../shared/interfaces/checkout-session';

const API = environment.BACKEND_URL + 'checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  createCheckoutSession(data: CheckoutSession): Observable<any> {
    const body = {...data}
    return this.http.post(`${API}/get-tours`, body);
  }
}
