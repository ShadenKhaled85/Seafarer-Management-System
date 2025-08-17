import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../../Core/Services/auth/auth.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)

  errorMsg : string = '';
  successMsg : string = '';

  loginForm : FormGroup = new FormGroup({
    username : new FormControl(null, [Validators.required]),
    password : new FormControl(null, [Validators.required])
  })

  submitForm(){
    this.errorMsg = '';
    const {username , password} = this.loginForm.value;

    if(username !== '1' && password !== '123456'){
      this.errorMsg = 'Invalid username or password';
      return;
    }

    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.getToken(username,password).subscribe({
        next:(res)=>{
          console.log(res);
          this.successMsg = 'Success'
          localStorage.setItem('token', res.access_token);
          this.router.navigate(['/seafarers']);
        },
        error:(err)=>{
          console.log(err);
          this.errorMsg = 'Login failed.';
        }
      })
    }else{
      this.loginForm.markAllAsTouched();
    }
  }

}
