import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';

@Component({
  templateUrl: 'index.component.html',
})
export class ProductComponent implements OnInit {
  public products: Product[];

  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.findAll();
  }
}
