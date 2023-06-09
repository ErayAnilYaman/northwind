
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators,FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export  class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder ,private authService:AuthService,private toastr:ToastrService){

  }
  ngOnInit(): void {
    this.createLoginForm();
  }
  
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }
  login(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value);

      this.authService.login(loginModel).subscribe((response)=>{
        console.log(response);
        this.toastr.success(response.message);
        localStorage.setItem("token",response.data.token);
      },responseError=>{
        console.log(responseError)
        this.toastr.error(responseError.error);
      })
    }
  }
}
