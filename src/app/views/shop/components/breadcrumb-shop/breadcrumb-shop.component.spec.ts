import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbShopComponent } from './breadcrumb-shop.component';

describe('BreadcrumbShopComponent', () => {
  let component: BreadcrumbShopComponent;
  let fixture: ComponentFixture<BreadcrumbShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbShopComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
