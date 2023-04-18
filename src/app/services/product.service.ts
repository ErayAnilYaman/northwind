import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://localhost:44368/api/"
  
  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategoryId(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getallbycategoryid?id=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
