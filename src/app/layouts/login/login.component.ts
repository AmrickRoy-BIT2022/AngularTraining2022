import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  
  loginForm: UntypedFormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  constructor(private fb: UntypedFormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  loginSubmit(form: UntypedFormGroup) {
    console.log(form.value);
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/demo']);
  }

  get email() { 
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
