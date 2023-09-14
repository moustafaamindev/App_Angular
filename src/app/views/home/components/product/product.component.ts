import { Component } from '@angular/core';
interface Product {
  over: string;
  imgsrc: string;
  titlename: string;
  sale: number;
  add: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products: Product[] = [
    {
      over: 'new',
      imgsrc: '../../../../../assets/imgs/products/product-1.jpg',
      titlename: 'Piqué Biker Jacket',
      sale: 67.24,
      add: 'Add To Cart',
    },
    {
      over: 'new',
      imgsrc: '../../../../../assets/imgs/products/product-2.jpg',
      titlename: 'T-shirt Contrast Pocket',
      sale: 60.0,
      add: 'Add To Cart',
    },
    {
      over: 'new',
      imgsrc: '../../../../../assets/imgs/products/product-3.jpg',
      titlename: 'Lether Backpack',
      sale: 55.24,
      add: 'Add To Cart',
    },
    {
      over: 'new',
      imgsrc: '../../../../../assets/imgs/products/product-4.jpg',
      titlename: 'Ankle Boots',
      sale: 70.5,
      add: 'Add To Cart',
    },
    {
      over: 'new',
      imgsrc: '../../../../../assets/imgs/products/product-5.jpg',
      titlename: 'Basic Flowing Scarf',
      sale: 80.24,
      add: 'Add To Cart',
    },
    {
      over: 'new',
      imgsrc: '../../../../../assets/imgs/products/product-6.jpg',
      titlename: 'Diagonal Textured Cap',
      sale: 47.9,
      add: 'Add To Cart',
    },
    {
      over: 'new',
      imgsrc: '../../../../../assets/imgs/products/product-7.jpg',
      titlename: 'Multi-pocket Chest Bag',
      sale: 100.2,
      add: 'Add To Cart',
    },
    {
      over: 'new',
      imgsrc: '../../../../../assets/imgs/products/product-8.jpg',
      titlename: 'Biker Jacket',
      sale: 90.4,
      add: 'Add To Cart',
    },
  ];
}
