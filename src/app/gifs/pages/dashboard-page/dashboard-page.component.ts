import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu.component';
import { GifsSideMenuHeaderComponent } from "../../components/side-menu-header/side-menu-header.component";
import { GifsSideMenuOptions } from "../../components/side-menu-options/side-menu-options.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [
    RouterOutlet,
    SideMenu,
],
  templateUrl: './dashboard-page.component.html',
})

export default class DashboardPage {}
