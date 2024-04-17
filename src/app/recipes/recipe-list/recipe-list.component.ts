import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit
{
	recipes: Recipe[] = [
		new Recipe("A Test Recipe", "A teste", "")
	];

	ngOnInit(): void
	{
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		
	}
}
