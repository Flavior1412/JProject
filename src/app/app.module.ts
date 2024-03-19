import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './general/login/login.component';
import { HomeComponent } from './general/home/home.component';
import { httpInterceptorProviders } from './helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './general/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
