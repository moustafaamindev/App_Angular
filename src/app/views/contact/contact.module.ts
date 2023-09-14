import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MapComponent } from './components/map/map.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';


@NgModule({
  declarations: [
    ContactComponent,
    MapComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
