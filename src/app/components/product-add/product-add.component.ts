import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validator, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm : FormGroup;
  constructor(private formBuilder:FormBuilder,private productService:ProductService,
    private toastrSevice:ToastrService){

  }
  ngOnInit(): void {
    this.createProductAddForm()

  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productName:["",Validators.required],
      unitPrice:["",Validators.required],
      unitsInStock:["",Validators.required],
      categoryId: ["",Validators.required]
    })

  }
  add(){
    
    if (this.productAddForm.valid) {
      let productModel =Object.assign({},this.productAddForm.value) 
      this.productService.add(productModel).subscribe((data)=>{
        console.log(data);
        this.toastrSevice.success(data.message,"Urun eklendi")
      },responseError=>{
        if (responseError.error.Errors.length>0) {
          console.log(responseError.error.Errors);
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrSevice.error(responseError.error.Errors[i].ErrorMessage,"Dogrulama hatasi")
          }
          
        }
      });
      
    }
    else{
      this.toastrSevice.error("HATA !!!","Formunuz eksik!!")
    }
  }
}
