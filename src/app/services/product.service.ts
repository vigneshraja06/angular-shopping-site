import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';

@Injectable()
export class ProductService {
  public products: Product[];
  items: any[];
  constructor() {
    this.products = [
      { id: 'p01', name: 'Shirt', price: 100, photo: 'product1' },
      { id: 'p02', name: 'Tshirt', price: 200, photo: 'product2' },
      { id: 'p03', name: 'Mobile', price: 300, photo: 'product3' },
      { id: 'p04', name: 'Laptop', price: 400, photo: 'product3' },
      { id: 'p05', name: 'Television', price: 500, photo: 'product3' },
      { id: 'p06', name: 'Backpack', price: 600, photo: 'product3' },
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  public getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  public totalQuantity: number = 0;
  public getTotalQuantity() {
    this.totalQuantity = 0;
    this.items = [];
    let item = 0;
    this.totalQuantity += item;
  }
}
