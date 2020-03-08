import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { ParentComponent } from './parent/parent.component';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from './model/api-response';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AddressApiService {

  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  message: any;
  API_KEY = '4sHZMY5oX0et07xn-1AGcA22930';

  constructor(private httpClient: HttpClient) {}
   // baseUrl = '/angular/register/connect.php';

  changeMessage(message: string) {
    this.messageSource.next(message);
    console.log(message);
  }

  public getAddress() {
    console.log(this.message);
   // return this.httpClient.get(`https://api.getAddress.io/find/${this.message}?api-key=4sHZMY5oX0et07xn-1AGcA22930`);
    //return this.httpClient.get(`https://api.getAddress.io/find/${this.message}/96?api-key=4sHZMY5oX0et07xn-1AGcA22930&expand=true`);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.httpClient.post<ApiResponse>('/angular/register/insert.php', user);
  }

  getUser(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>('/angular/register/list.php');
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>('/angular/register/getUserById.php?id=' + id);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>('/angular/register/delete.php?id=' + id);
  }

  // login(loginData) : Observable<Api> {
    
  // }
}
