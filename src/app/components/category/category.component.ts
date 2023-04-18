import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private categoryService:CategoryService){

  }
  ngOnInit(): void {
    this.getCategories();
  }
  currentCategory:Category;
  categories:Category[]=[]
  dataLoaded = false;

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      
      this.categories = response.data
      this.dataLoaded = true;
    })
  }
  setCurrentCategory(category:Category){
    this.currentCategory =category
  }
  getCurrentCategoryClass(category:Category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }
    return "list-group-item"
  }
  getAllCategoryClass(){
    return "list-group-item active"
  }
  removeCategoryClass(category:Category){
    return "list-group-item"
  }
  removeCurrentCategory(currentCategory:Category){
    this.categories.forEach(category => {
      this.currentCategory = category
      this.removeCategoryClass(category)
    });
  }
  
}
