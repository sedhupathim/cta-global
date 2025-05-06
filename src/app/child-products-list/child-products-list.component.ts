import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-child-products-list',
  templateUrl: './child-products-list.component.html',
  styleUrls: ['./child-products-list.component.scss']
})
export class ChildProductsListComponent {

  categories : [] = [];   
   selectedCategory: any = null;
   category_slug : string = '';
   child_category_slug : string = '';
    selectedChildCategory: any = null;
   constructor(
   private http: HttpClient,
   private ac_route : ActivatedRoute,
   private router : Router) {}
  
    ngOnInit() {
      
      this.http.get<any[]>('assets/product-categories.json')
      .subscribe((data: any) => {
        this.categories = data;
    
        this.ac_route.params.subscribe((params) => {  
          this.category_slug = params['category_slug'];
          this.child_category_slug = params['sub_category_slug'];  // 👈 get child category slug from URL params
    
          console.log('Category Slug:', this.category_slug);
          console.log('Child Category Slug:', this.child_category_slug);
    
          // Find parent category first
          this.selectedCategory = this.categories.find((category: any) => category.slug === this.category_slug) || {};
          console.log('Selected Category:', this.selectedCategory);
    
          // Find child category inside selected category
          if (this.selectedCategory && this.selectedCategory.productList) {
            this.selectedChildCategory = this.selectedCategory.productList.find((child: any) => child.slug === this.child_category_slug) || {};
            console.log('Selected Child Category:', this.selectedChildCategory);
          } else {
            this.selectedChildCategory = {};
          }
    
        });
      });
    }
    
  

}
