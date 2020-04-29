import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentComponent: String = "";
  @ViewChild(SidebarComponent, { static: true }) child: SidebarComponent;
  item: String = "";

  constructor() { }

  ngOnInit() {
  }

  onChanged(item: String) {
    this.item = item;
  }
}
