import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a Test',
      'https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2018/02/fall-apart-roasted-pork-shoulder-319.jpg',
  [
    new Ingredient('Meat', 1),
    new Ingredient('French Fries', 20)
  ]),
    new Recipe('A Test2 Recipe',
      'This is simply a Test2',
      'https://img.taste.com.au/DzZTwETU/taste/2019/06/roast-pork-with-crispy-crackling-and-maple-mustard-pears-p50-150224-3.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ])

  ];

  constructor(private slService: ShoppingListService) {


  }


  getRecipes(){
  return this.recipes.slice();
}
addIngredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients);
}
}
