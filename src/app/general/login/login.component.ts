import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm ={
    userName: null,
    passWord: null
  };
  isLoggedIn: boolean = false;
  isLoggedFail: boolean = false;
  roles: string[] = [];
  constructor(
    private readonly storageService: StorageService
  ){

  }
  ngOnInit(): void {
    if(this.storageService.isLoggedIn()){
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles
    }
  }

  onSubmit(){}
}
