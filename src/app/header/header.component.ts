import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeTab: string = 'Home'; // Default active tab
  showDropdown = false;
  categories: any[] = [];


  navItems = [
    { name: 'Home', label: 'Home' },
    { name: 'Service', label: 'Service' },
    { name: 'AboutUs', label: 'About Us' },
    { name: 'ContactUs', label: 'Contact Us' }
  ];

  
 constructor(private http: HttpClient) {}

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
    const phoneNumber = "919524021452";
    const message = "Hello Sedhupathi";
    const encodedMsg = encodeURIComponent(message);
  
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
    const url = isMobile
      ? `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMsg}`;
  
    window.open(url, "_blank");
  }
  

}
