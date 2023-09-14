import { ShopModule } from './views/shop/shop.module';
import { HomeModule } from './views/home/home.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './views/shop/shop.component';

import { ContactModule } from './views/contact/contact.module';
import { ContactComponent } from './views/contact/contact.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { BlogsComponent } from './views/blogs/blogs.component';
import { BlogsModule } from './views/blogs/blogs.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then(() => HomeModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./views/shop/shop.module').then(() => ShopModule),
    component: ShopComponent,
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./views/blogs/blogs.module').then(() => BlogsModule),
    component: BlogsComponent,
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./views/contact/contact.module').then(() => ContactModule),
    component: ContactComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
