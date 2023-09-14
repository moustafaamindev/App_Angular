import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from '../blogs/blogs.component';
import { OurBlogComponent } from './components/our-blog/our-blog.component';

@NgModule({
  declarations: [BlogsComponent, OurBlogComponent],
  imports: [CommonModule, BlogsRoutingModule],
})
export class BlogsModule {}
