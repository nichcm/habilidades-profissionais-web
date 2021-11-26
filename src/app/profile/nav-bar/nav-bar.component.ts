import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  pessoaID!: number;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.authService.pegaID().subscribe((usuario: any)=>{
      if(usuario){
        this.pessoaID = usuario.id
      }
    })

  }

  logout(){
    this.authService.logout()
    this.router.navigate(['/'])
  }

  admin(){
    this.router.navigate(['user', this.pessoaID,'admin'])
  }

}
