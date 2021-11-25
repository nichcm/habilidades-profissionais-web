import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Pessoa } from 'src/app/models/Pessoa';

@Component({
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  errorMessagem: string =  '';
  singupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.singupForm = this.formBuilder.group({
      nome: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      senha: ['',
        [
          Validators.required,
          //Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm),
          Validators.minLength(6),
          Validators.maxLength(128)
        ]
      ],
      adm:['0']
    });
  }
  signup() {
    const newUser = this.singupForm.getRawValue() as Pessoa;
    this.authService
        .signup(newUser)
        .subscribe({
            next: () => this.router.navigate(['']),
            error: (error: HttpErrorResponse) => {
              if(error.error.errors){
                error.error.errors.forEach((v: any) => {
                  if(v.type === 'unique violation'){
                    this.errorMessagem = 'email já cadastrado'
                  }
                });
              }
            }
        });
  }

}
