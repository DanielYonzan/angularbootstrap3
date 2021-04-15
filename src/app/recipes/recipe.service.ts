import {Recipe} from './recipe.model';

export class RecipeService {
private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2018/02/fall-apart-roasted-pork-shoulder-319.jpg'),
    new Recipe('A Test2 Recipe', 'This is simply a Test2', 'https://img.taste.com.au/DzZTwETU/taste/2019/06/roast-pork-with-crispy-crackling-and-maple-mustard-pears-p50-150224-3.jpg')

  ];

getRecipes(){
  return this.recipes.slice();
}
}
