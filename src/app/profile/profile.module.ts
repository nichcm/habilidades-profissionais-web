import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';



@NgModule({
  declarations: [
    ProfileComponent,
    NavBarComponent,
    HabilidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProfileModule { }
