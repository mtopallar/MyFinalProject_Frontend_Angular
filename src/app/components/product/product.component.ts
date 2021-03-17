import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService
  ) {} //ctor da verdiğimiz değişkene buradan eriebiliyoruz c# da erişemiyorduk. globaldeki değişkene set etmemiz gerekiyordu. ActivatedRoute built in bir anguler servisi. Aktifleştirilmiş Route (mevcut route) o anki adres çubuğundaki adres.

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getProductsByCategory(params['categoryId']);
      } else {
        this.getProducts();
      }
    });
  }
  //observable subscribe olunabilir demek. subscribe ın içi senkron çalışır
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true; //burda data gerçekten yüklenmiş oluyor.
    });
  }

  getProductsByCategory(categoryId: number) {
    this.productService
      .getProductsByCategory(categoryId)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true; //burda data gerçekten yüklenmiş oluyor.
      });
  }

  addToCart(product: Product) {
    this.toastrService.success("Sepete eklendi",product.productName)
    this.cartService.addToCart(product)
  }
}
