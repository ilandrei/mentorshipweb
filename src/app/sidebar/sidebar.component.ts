import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() changed = new EventEmitter<string>();
  userName: String = "Profile";

  constructor(private authService: MsAdalAngular6Service) { }

  ngOnInit() {
    this.userName = this.authService.LoggedInUserName ? this.authService.LoggedInUserName : this.authService.LoggedInUserEmail;
    console.log(this.authService.userInfo);
  }

  clickedHome() {
    this.changed.emit('homescreen');
  }
  clickedExplore() {
    this.changed.emit('explore');
  }
  clickedSearch() {
    this.changed.emit('search');
  }
  clickedAdd() {
    this.changed.emit('addlisting');
  }
  clickedProfile() {
    this.changed.emit('profile');
  }
}
