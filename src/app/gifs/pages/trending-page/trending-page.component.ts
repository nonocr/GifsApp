import { AfterViewInit, Component, ElementRef, inject, viewChild,  } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';

@Component({
  selector: 'trending-page.component',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit{
  gifService = inject(GifService)
  ScrollStateService = inject(ScrollStateService)

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    scrollDiv.scrollTop = this.ScrollStateService.trendigScrollState();
  }

  onScroll(event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.ScrollStateService.trendigScrollState.set(scrollTop);

    if( isAtBottom ){
      this.gifService.loadTrendingGifs();
    }
  }
}
