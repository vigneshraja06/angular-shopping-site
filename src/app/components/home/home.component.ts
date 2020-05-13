import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './index.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public products: Product[];
  constructor(
    public activatedRoute: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit() {
    this.products = this.productService.findAll();
  }
}
