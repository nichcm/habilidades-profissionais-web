import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginGuard } from './core/auth/login.guard';

import { SignInComponent } from './home/signin/signin.component';
import { SingupComponent } from './home/singup/singup.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'signup',
    component: SingupComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'user/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
