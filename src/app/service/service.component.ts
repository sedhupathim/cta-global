import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  categories: any[] = [];

  //Swiper breakpoints
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

 constructor(private http: HttpClient) {}




  ngOnInit() {
    
    this.http.get<any[]>('assets/product-categories.json')
      .subscribe(data => {
        this.categories = data;
        console.log(this.categories)
      });
  }

}
