import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { ChildProductsListComponent } from './child-products-list/child-products-list.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/category/:category_slug', component: ProductListComponent },
  { path: 'products/category/:category_slug/:sub_category_slug', component: ChildProductsListComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: '**', redirectTo: '' }, 
];

@NgModule({
  imports: [    
  HttpClientModule,   
  RouterModule.forRoot(routes)
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
