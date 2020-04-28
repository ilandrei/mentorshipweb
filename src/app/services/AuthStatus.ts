import { CanActivate, Router } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStatus implements CanActivate {

  constructor(private authService: MsAdalAngular6Service, private router: Router) { }


  canActivate() {

    if (this.authService.isAuthenticated) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}
