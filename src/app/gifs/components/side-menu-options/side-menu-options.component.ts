import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from '../../services/gifs.service';


interface menuOption {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class GifsSideMenuOptions {

  gifsService = inject(GifService)

  menuOptions: menuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
       subLabel: 'Gifs Populares',
       route: '/dashboard/trending'
    },

    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
       subLabel: 'Buscar gifs',
       route: '/dashboard/search'
    },


  ]
}
