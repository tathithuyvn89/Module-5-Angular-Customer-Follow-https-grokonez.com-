import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCustomer(customer: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, customer);
  }

  updateCustomer(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
