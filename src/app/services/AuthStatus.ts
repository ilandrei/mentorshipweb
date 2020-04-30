import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthStatus implements CanActivate {

  constructor(private authService: MsAdalAngular6Service, private router: Router) { }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.isAuthenticated) { return true; }
    return this.router.parseUrl('login');
  }
}
