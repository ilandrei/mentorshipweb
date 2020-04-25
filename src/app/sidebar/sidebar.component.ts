import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
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
