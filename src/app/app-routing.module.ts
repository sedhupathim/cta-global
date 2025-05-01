import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/category/:category_slug', component: ProductListComponent },
  { path: '**', redirectTo: '' }, // Optional: redirect unknown routes to home
];

@NgModule({
  imports: [    
  HttpClientModule,   
  RouterModule.forRoot(routes)
 ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
