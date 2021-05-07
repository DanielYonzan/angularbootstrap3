import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[];
private idChangeSub: Subscription;

  constructor(private slService: ShoppingListService,
              private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
  this.idChangeSub =  this.slService.ingredientsChange.
      subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    });

  this.loggingService.printLog('Hello from ShoppingList ngOnInit')
  }

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }

  onEditItem(index: number) {
this.slService.startEditing.next(index);

  }
}

