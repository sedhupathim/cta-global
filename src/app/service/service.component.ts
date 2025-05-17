import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {

  categories: any[] = [];
  constructor(
    private http: HttpClient,
    private router: Router) 
  { }

  ngOnInit() {
    this.http.get<any[]>('assets/product-categories.json')
      .subscribe(data => {
        this.categories = data;
        console.log(this.categories)
      });
  }

  goToServiceCategory(cate_slug: string) {
    this.router.navigate([`/products/category/${cate_slug}`]);
  }

}
