import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HabilidadesPessoa } from 'src/app/models/HabilidadesPessoa';
import { API_URL } from '../../core/constants';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {

  constructor(private http: HttpClient) { }

  pegaHabilidadesDaPessoa(id: number){
    return this.http.get<HabilidadesPessoa[]>(`${API_URL}/niveis/pessoas/${id}`)
  }
}
