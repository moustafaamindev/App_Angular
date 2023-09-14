import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor() {
    let countDownDate = new Date('nov 13 , 2023 23:59:59').getTime();
    let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const day = document.getElementById('days');
      const hour = document.getElementById('hours');
      const min = document.getElementById('minutes');
      const sec = document.getElementById('seconds');
      if (sec && min && hour && day) {
        day.innerText = days.toString();
        hour.innerText = hours.toString();
        min.innerText = minutes.toString();
        sec.innerText = seconds.toString();
      }
    }, 1000);
  }
}
