import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginMode: boolean = true;
  registerError: string = "";
  loginError: string = "";
  pageTitle: String = "Loginn";

  loginForm = new FormGroup({
    loginEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    loginPassword: new FormControl('', [
      Validators.required])
  })

  registerForm = new FormGroup({
    registerEmail: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    registerPassword: new FormControl('', [
      Validators.required]),
    registerPasswordConfirm: new FormControl('', [
      Validators.required]),
  })


  constructor() { }

  ngOnInit() {
  }

  login() {
    if (!this.loginHasErrors()) {
      this.loginError = "";
    }
  }
  register() {
    if (!this.registerHasErrors()) {
      this.registerError = "";
    }
  }
  registerPressed() {
    this.loginMode = false;
    this.pageTitle = "Register";
  }
  registerCancel() {
    this.loginMode = true;
    this.pageTitle = "Login";
  }


  loginHasErrors() {
    if (this.getLoginEmail().errors) {
      if (this.getLoginEmail().errors.required) {
        this.loginError = "No email address was provided";
        return true;
      }
      if (this.getLoginEmail().errors.pattern) {
        this.loginError = "Email address is invalid";
        return true;
      }
    }
    if (this.getLoginPassword().errors) {
      if (this.getLoginPassword().errors.required) {
        this.loginError = "No password was provided";
        return true;
      }
    }
    return false;
  }


  registerHasErrors() {
    if (this.getRegisterEmail().errors) {
      if (this.getRegisterEmail().errors.required) {
        this.registerError = "No email address was provided";
        return true;
      }
      if (this.getRegisterEmail().errors.pattern) {
        this.registerError = "Email address is invalid";
        return true;
      }
    }
    if (this.getRegisterPassword().errors) {
      if (this.getRegisterPassword().errors.required) {
        this.registerError = "No password was provided";
        return true;
      }
    }

    if (this.getRegisterPassword().value != this.getRegisterPasswordConfirm().value) {
      this.registerError = "Passwords don't match";
      return true;
    }
    return false;
  }


  private getLoginEmail() {
    return this.loginForm.get('loginEmail')
  }
  private getLoginPassword() {
    return this.loginForm.get('loginPassword')
  }
  private getRegisterEmail() {
    return this.registerForm.get('registerEmail')
  }
  private getRegisterPassword() {
    return this.registerForm.get('registerPassword')
  }
  private getRegisterPasswordConfirm() {
    return this.registerForm.get('registerPasswordConfirm')
  }

}
