import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { ListingsService } from './services/listings.service';
import { MapComponent } from './map/map.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    AddListingComponent,
    SearchComponent,
    DetailComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MsAdalAngular6Module.forRoot({
      tenant: '3936c37a-9422-4a0b-8cfc-3b540ffdd1c1',
      clientId: 'f0dbf35d-7ad6-4b38-a435-0764304ea8cf',
      redirectUri: 'https://mentorship-cc.azurewebsites.net/home',
      authority: 'https://login.microsoftonline.com/consumers/',
      // redirectUri: 'http://localhost:4200/home',

      validateAuthority: true,
      navigateToLoginRequestUrl: false,
      cacheLocation: '<localStorage / sessionStorage>',
      postLogoutRedirectUri: 'https://mentorship-cc.azurewebsites.net/login',
    }),
  ],
  providers: [ListingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
