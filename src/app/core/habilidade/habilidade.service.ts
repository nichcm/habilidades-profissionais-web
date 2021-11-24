import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidade } from 'src/app/models/habilidade';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class HabilidadeService {

  constructor(private http: HttpClient) { }

  pegaHabilidadesDaPessoa(id: number){
    return this.http.get<Habilidade>(`${API_URL}/pessoas/${id}/habilidade`)
  }
}
