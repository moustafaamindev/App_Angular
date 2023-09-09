import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  nextIcon = '<i class="fa-solid fa-arrow-left next_arrow"></i>';
  prevIcon = '<i class="fa-solid fa-arrow-right prev_arrow"></i>';
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    dots: false,
    animateOut: 'fadeOut',
    navText: [this.nextIcon, this.prevIcon],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
