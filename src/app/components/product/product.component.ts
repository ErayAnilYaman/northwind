import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductResponseModule } from 'src/app/models/productResponseModule';
import { ProductService } from 'src/app/services/product.service';
// axios ,fetch
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  

  dataLoaded = false;
  products:Product[] = []
  
  constructor(private productService:ProductService){  }

  ngOnInit():void{
    console.log("Init calisti")
    this.getProducts();

  }
  
  getProducts(){
    this.productService.getProducts().subscribe((response)=>{
      this.products = response.data
      this.dataLoaded = true;
    });
  }
}
