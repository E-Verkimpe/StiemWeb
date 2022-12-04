import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"), Validators.required]],
  });

  error: string = '';
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  submit() {
    if (!this.loginForm.valid) return;
    const values = this.loginForm.getRawValue();
    this.authService.login({ username: values.username!, password: values.password! }).subscribe(
      (resp) => {},
      (err) => {this.error = err.error.message}
    );
  }

  ngOnInit(): void {
  }

  
}
