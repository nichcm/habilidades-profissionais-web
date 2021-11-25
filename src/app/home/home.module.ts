import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SingupComponent } from './singup/singup.component';

@NgModule({
    declarations: [ SignInComponent, SingupComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule { }
