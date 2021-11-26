import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { HabilidadesPessoa } from 'src/app/models/HabilidadesPessoa';
import { HabilidadeService } from './habilidade.service';

@Component({
  selector: 'app-habilidade',
  templateUrl: './habilidade.component.html',
  styleUrls: ['./habilidade.component.scss']
})
export class HabilidadeComponent implements OnInit {
  pessoaID!: number;
  habilidades: HabilidadesPessoa[] = [];

  constructor(
    private authService: AuthService,
    private habilidadeService: HabilidadeService) { }

  ngOnInit(): void {
    this.authService.pegaID().subscribe((usuario: any)=>{
      if(usuario){
        this.pessoaID = usuario.id
        this.pegaHabilidades()
      }
    })
  }

  pegaHabilidades(){
    this.habilidadeService.pegaHabilidadesDaPessoa(this.pessoaID)
    .subscribe((habilidade)=>{
      this.habilidades = habilidade
      console.log(this.habilidades)
    })
  }


}
