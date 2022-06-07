import { Injectable } from '@angular/core';
import {Customer} from '../model/customer'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerApiUrl = 'https://localhost:44346/customer';
  constructor(private http: HttpClient) {
    
   }
  getCustomer(token:string): Observable<Customer> {
    const headers= new HttpHeaders().set('Authorization', token);
    return  this.http.get<Customer>(this.customerApiUrl, { 'headers': headers });
  }
  loginCustomer(customerID:string):Observable<string>{
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'responseType': 'text'
      }),
    };
    return this.http.get(this.customerApiUrl + "/login/" + customerID, {'responseType': 'text'});
  }
}
