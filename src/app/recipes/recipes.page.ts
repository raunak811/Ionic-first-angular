import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy, AfterViewInit  {

 recipes: Recipe[];

  constructor(private recipeService: RecipesService) {
    console.log('consssss');
   }



  ngOnInit() {
    console.log('Listingg');
    this.recipes = this.recipeService.getAllrecipes();
    console.log('yyy', this.recipes);
  }

  ngAfterViewInit() {
    alert('afterview init');
  }

  ngOnDestroy() {
    alert('leaving');
    this.recipes = [];
  }

}
