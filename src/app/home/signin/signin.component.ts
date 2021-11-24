import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/plataform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    
    loginForm!: FormGroup;
    @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    } 

    login() {
        const userName = this.loginForm.get('userName')?.value;
        const password = this.loginForm.get('password')?.value;

        this.authService
            .authenticate(userName, password)
            .subscribe((value) => this.router.navigate(['user', value.body?.pessoa.id])                
            );
    }
}