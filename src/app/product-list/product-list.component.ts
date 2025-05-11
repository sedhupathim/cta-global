import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

 categories : [] = [];   
 selectedCategory: any = null;
 category_slug : string = '';
 constructor(
 private http: HttpClient,
 private ac_route : ActivatedRoute,
 private router : Router) {}

  ngOnInit() {
    
    this.http.get<any[]>('assets/product-categories.json')
      .subscribe((data: any) => {
        this.categories = data;
        console.log(this.categories)
        this.ac_route.params.subscribe((params) => {  
        this.category_slug = params['category_slug'];
        console.log(this.category_slug);
        this.selectedCategory = this.categories.find((category: any) => category.slug === this.category_slug) || {};
        console.log(this.selectedCategory);
        }
        );
      });
  }
  
  goHome() {
    this.router.navigate(['/']);
  }

}
