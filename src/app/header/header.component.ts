import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  activeTab: string = 'Home'; // Default active tab

  navItems = [
    { name: 'Home', label: 'Home' },
    { name: 'Service', label: 'Service' },
    { name: 'AboutUs', label: 'About Us' },
    { name: 'ContactUs', label: 'Contact Us' }
  ];

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }

}
