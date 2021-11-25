import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    ProfileComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
