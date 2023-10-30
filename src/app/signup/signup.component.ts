import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = ''
  

  onSubmit(signupForm: NgForm ){
    console.log(signupForm)

  }
}
