import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { ErrorsModule } from './errors/errors.module';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ErrorsModule,
    HomeModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
