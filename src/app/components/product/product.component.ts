import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../services/cart.service';
import { Component, NgModule, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
// axios ,fetch
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  
  dataLoaded = false;
  products:Product[] = []
  filterText = "";
  
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService, private cartService:CartService){  }

  ngOnInit():void{
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategoryId(params["categoryId"])
      }
      else
      {
        this.getProducts()
      }

    })

  }
  
  getProducts(){
    this.productService.getProducts().subscribe((response)=>{
      this.products = response.data
      this.dataLoaded = true;
    });
  }
  getProductsByCategoryId(id:number){
    this.productService.getProductsByCategoryId(id).subscribe((response=>{
      this.products = response.data;
      this.dataLoaded = true
    }))
  }
  addToCart(product:Product){
    if (product.productId !== 1) {
      this.toastrService.success("Sepete Eklendi",product.productName);
      this.cartService.addToCart(product);
    }
    
    else{
      this.toastrService.error("Sepete eklenemedi","Bu urun sepete eklenemedi");
      
    }
  }
  

}
