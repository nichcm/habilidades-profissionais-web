import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from 'src/app/models/Pessoa';
import { map } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';
import { API_URL_PUBLIC } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pessoaSubject = new BehaviorSubject<Pessoa | undefined>(undefined);

  constructor(private http: HttpClient) { }

  authenticate(email: string, senha: string) {
    return this.http
      .post<{ token: string, pessoa: Pessoa }>(
        API_URL_PUBLIC + '/login',
        { email, senha },
        { observe: 'response' }
      ).pipe(map(res => {
        if(res.body){
          const authtoken = res.body?.token;
          this.setToken(authtoken);
          this.notifyPessoa(res.body.pessoa)
        }
        return res
      }))


  }

  //user.service
  setToken(token: string) {
    window.localStorage.setItem('token', token);
  }

  getUser() {
    return this.pessoaSubject.asObservable();
  }

  private notifyPessoa(pessoa: Pessoa) {
    this.pessoaSubject.next(pessoa);
  }

  logout() {
    this.removeToken();
    this.pessoaSubject.next(undefined);
  }

  isLogged() {
    return !!this.getToken();
  }

  //token.service


  getToken() {
    return window.localStorage.getItem('token');
  }

  removeToken() {
    window.localStorage.removeItem('token');
  }

}
