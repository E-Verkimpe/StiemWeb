import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group(
    {
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"), Validators.required]]
    },
  );

  error: string = '';

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  submit() {
    if (!this.registerForm.valid) return;
    const values = this.registerForm.getRawValue();
    this.authService.register({ username: values.username!, email: values.email!, password: values.password! }).subscribe(
      (resp) => {},
      (err) => {this.error = err.error.message}
    );
  }

  ngOnInit(): void {
  }

}
