import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductResponseModule } from 'src/app/models/productResponseModule';
// axios ,fetch
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  

  apiUrl = "https://localhost:44368/api/products/getall"
  products:Product[] = []
  
  constructor(private httpClient:HttpClient){  }

  ngOnInit():void{
    console.log("Init calisti")
    this.getProducts();

  }
  
  getProducts(){
    this.httpClient
    .get<ProductResponseModule>(this.apiUrl)
    .subscribe((response)=>{
      this.products = response.data
    });
  }
}
