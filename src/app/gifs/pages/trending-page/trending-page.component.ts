import { Component } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'trending-page.component',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {}
