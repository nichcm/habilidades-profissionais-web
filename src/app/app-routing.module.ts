import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './gerenciamento/admin.component';
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
  },
  {
    path: 'user/:id/admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
