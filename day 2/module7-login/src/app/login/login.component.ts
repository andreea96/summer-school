import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly authService: AuthService,
    private readonly router: Router) { }

  ngOnInit(): void {
    if (this.authService.hasToken()) {
      this.router.navigate(['']);
    }
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      this.authService.login(username, password).subscribe(res => {
        this.authService.storeToken(res);
        this.router.navigate(['']);
      })
    }
  }
}
