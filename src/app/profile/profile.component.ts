import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';
import { HabilidadeService } from '../core/habilidade/habilidade.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
