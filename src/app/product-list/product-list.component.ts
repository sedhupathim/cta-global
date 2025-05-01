import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  categories: any[] = [];
 constructor(private http: HttpClient) {}




  ngOnInit() {
    
    this.http.get<any[]>('assets/product-categories.json')
      .subscribe((data: any[]) => {
        this.categories = data;
        console.log(this.categories)
      });
  }

}
