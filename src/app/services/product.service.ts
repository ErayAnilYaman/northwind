import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { ProductResponseModule } from '../models/productResponseModule';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:44368/api/products/getall"
  
  getProducts():Observable<ProductResponseModule>{
    return this.httpClient.get<ProductResponseModule>(this.apiUrl);
  }
}
