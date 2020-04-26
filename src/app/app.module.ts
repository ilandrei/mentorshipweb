import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { DisplayListingComponent } from './display-listing/display-listing.component'
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { AuthStatus } from './services/AuthStatus';
import { SearchComponent } from './search/search.component';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    AddListingComponent,
    DisplayListingComponent,
    AddListingComponent,
    DisplayListingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MsAdalAngular6Module.forRoot({
      tenant: '3936c37a-9422-4a0b-8cfc-3b540ffdd1c1',
      clientId: '50d4fa9e-c462-4a7e-b577-5b8bf2ee88e9',
      redirectUri: 'https://mentorship-cc.azurewebsites.net/home',
      // redirectUri: 'http://localhost:4200/home',
      endpoints: {
        'api application url': 'api application client id', // this is for feteching the access token
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>',
      postLogoutRedirectUri: 'https://mentorship-cc.azurewebsites.net/login',
    }),
  ],
  providers: [AuthStatus],
  bootstrap: [AppComponent]
})
export class AppModule { }
