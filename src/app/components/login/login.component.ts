import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
login() {
throw new Error('Method not implemented.');
}

  hide: boolean = true;
  loginForm!: FormGroup;
  error!: string;


constructor(private router: Router, private formBuilder: FormBuilder) {

}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

navigateToRegistration(): void {
  this.router.navigate(['/signup']);
}

}
