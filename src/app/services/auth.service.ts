import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "https://localhost:44368/api/auth/"
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login",loginModel);

  }
  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    return false;
  }
}
