import { Component, OnInit } from '@angular/core';

import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Noodles and sauce',
      'https://www.spendwithpennies.com/wp-content/uploads/2019/03/Spaghetti-and-Meatballs-SpendWithPennies-4.jpg'
    ),
    new Recipe(
      'Tacos',
      'Tortillas and fillings',
      'https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg   '
    ),
    new Recipe(
      'Cake',
      'Hot butter, eggs, flour and milk',
      'https://www.handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
