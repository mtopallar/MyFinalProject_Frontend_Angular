import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  
 
  constructor(private productService:ProductService) {} //ctor da verdiğimiz değişkene buradan eriebiliyoruz c# da erişemiyorduk. globaldeki değişkene set etmemiz gerekiyordu.

  ngOnInit(): void {
    this.getProducts();
  }
  //observable subscribe olunabilir demek. subscribe ın içi senkron çalışır
  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true; //burda data gerçekten yüklenmiş oluyor.
    })
  }
}
