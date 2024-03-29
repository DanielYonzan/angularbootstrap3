import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

let appRoutes: Routes;
appRoutes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {
        path: `recipes`,
        loadChildren: './recipes/recipes.module#RecipesModule'
        // loadChildren: () => import('./recipes/recipes.module')
        //     .then(m => m.RecipesModule)}
    },
    {
        path: 'shopping-list',
        loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,
        { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
