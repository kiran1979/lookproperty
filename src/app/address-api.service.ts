import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from } from 'rxjs';
import { ParentComponent } from './parent/parent.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressApiService {

  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  message: any;
  API_KEY = '4sHZMY5oX0et07xn-1AGcA22930';
  constructor(private httpClient: HttpClient) {}

  changeMessage(message: string) {
    this.messageSource.next(message);
    console.log(message);
  }

  public getAddress() {
    console.log(this.message);
   // return this.httpClient.get(`https://api.getAddress.io/find/${this.message}?api-key=4sHZMY5oX0et07xn-1AGcA22930`);
    //return this.httpClient.get(`https://api.getAddress.io/find/${this.message}/96?api-key=4sHZMY5oX0et07xn-1AGcA22930&expand=true`);
  }
}
