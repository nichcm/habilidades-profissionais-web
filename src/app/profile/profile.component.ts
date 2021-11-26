import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';
import { Pessoa } from '../models/Pessoa';
import { HabilidadeService } from './habilidade/habilidade.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  pessoa$!: Observable<Pessoa>;
  pessoa!: Pessoa;

  id!: number;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private habilidadeService: HabilidadeService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.id = +(this.route.snapshot.paramMap.get('id') as string);
    this.habilidadeService.pegaHabilidadesDaPessoa(this.id)
      .subscribe(habilidades =>{
        console.log(habilidades)
      })

  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/'])
  }

}
