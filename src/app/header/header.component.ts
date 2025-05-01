import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeTab: string = 'Home'; // Default active tab
  showDropdown = false;
  categories: any[] = [];
  hoveredCategory: any = null;


  navItems = [
    { name: 'Home', label: 'Home' },
    { name: 'Service', label: 'Service' },
    { name: 'AboutUs', label: 'About Us' },
    { name: 'ContactUs', label: 'Contact Us' }
  ];

  
 constructor(private http: HttpClient,
  private router : Router
 ) {}

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }

  ngOnInit() {
    
    this.http.get<any[]>('assets/product-categories.json')
      .subscribe(data => {
        this.categories = data;
        console.log(this.categories)
      });
  }


  openWhatsApp() {
    const phoneNumber = "+1(345)3278457";
    const message = "Hello CTA Glogal";
    const encodedMsg = encodeURIComponent(message);
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`;
      window.open(url, "_blank");
  }
  
  openProduct(category = null) {
    console.log(category);
    this.showDropdown = false; // Close the dropdown after selection
    if (category && category['slug']) {
      this.router.navigate([ `/products/category/${category['slug']}`]);
    } 
    else {
      this.router.navigate(["/products"]);
    }
  }


}
