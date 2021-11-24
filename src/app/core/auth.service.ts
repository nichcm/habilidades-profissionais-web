import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:4200'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  authenticate( userName:  string, pasword: string  ){
    this.http.post(API_URL + '/pessoas/login' )
  }
}
