import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Jproject';
  private roles: string[] = [];
  isLoggedIn: boolean = false;
  username?: string;
  showAdminBoard: boolean = false;
  constructor(
    private storageService: StorageService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    }
  }

  logout(): void {
    this.authService.logout().subscribe(
      (res) => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      (error) => console.log(error)
    );
  }
}
