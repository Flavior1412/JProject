import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm = {
    userName: null,
    password: null,
  };
  isLoggedIn: boolean = false;
  isLoggedFail: boolean = false;
  roles: string[] = [];
  constructor(
    private readonly storageService: StorageService,
    private readonly authService: AuthService
  ) {}
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit() {
    const { userName, password } = this.loginForm;
    this.authService
      .login(userName as unknown as string, password as unknown as string)
      .subscribe((res) => {
        this.storageService.saveUser(res);
        this.isLoggedIn = true;
        this.roles = res.roles;
        location.reload();
      }),
      (error: any) => {
        console.log(error);
      };
  }
}
