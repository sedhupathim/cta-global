import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-child-products-list',
  templateUrl: './child-products-list.component.html',
  styleUrls: ['./child-products-list.component.scss']
})
export class ChildProductsListComponent {

  categories: [] = [];
  selectedCategory: any = null;
  category_slug: string = '';
  child_category_slug: string = '';
  selectedChildCategory: any = null;
  constructor(
    private http: HttpClient,
    private ac_route: ActivatedRoute,
    private router: Router) { }

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
          } else {
            this.selectedChildCategory = {};
          }

        });
      });
  }

  // Function to navigate to the product details page
  goToMainCategory() {
    this.router.navigate([`/products/category/${this.selectedCategory['slug']}`]);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  onShareClick(event: MouseEvent, product: any): void {
    event.stopPropagation();
    this.openWhatsApp(product);
  }

  openWhatsApp(product: any): void {
    const phoneNumber = "+13453278457"; // No brackets or symbols
    const productName = product?.product_name || "a product";
    const category = this.selectedChildCategory['cate_name'] || "HVAC Equipment";

    // Emojis relevant to mechanical/HVAC equipment
    const message = `👋 Hello CTA Global,

I'm interested in the following product from your *${category}* category:

🔧 *${productName}*

Please share more details including specifications and pricing. Thank you!`;

    const encodedMsg = encodeURIComponent(message);

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const baseUrl = isMobile
      ? `https://api.whatsapp.com/send`
      : `https://web.whatsapp.com/send`;

    const url = `${baseUrl}?phone=${phoneNumber}&text=${encodedMsg}`;
    window.open(url, "_blank");
  }




}
