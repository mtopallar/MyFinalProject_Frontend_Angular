import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //backend e bağlanmak için
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44303/api/Products/getall';

  constructor(private httClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httClient.get<ProductResponseModel>(this.apiUrl)     
      };
    //gelen datayı ProductResponseModel ine map et.
  }

