import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { BreadcrumbShopComponent } from './components/breadcrumb-shop/breadcrumb-shop.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductShopComponent } from './components/product-shop/product-shop.component';


@NgModule({
  declarations: [
    ShopComponent,
    BreadcrumbShopComponent,
    SidebarComponent,
    ProductShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
