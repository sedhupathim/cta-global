import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  testImages: Array<string>;

  breakpoints = {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    }
    ,
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    }
  };

  constructor() {
    this.testImages = [
      "assets/man.png",
      "assets/man.png",
      "assets/man.png",
      "assets/man.png"    
    ]
  }
}
