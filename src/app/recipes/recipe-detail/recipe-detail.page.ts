import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('reciepeId')) {
          console.log('not found')
          // redirect
          this.router.navigate(['/recipes']);
          return;
        }
        const recipeId = paramMap.get('reciepeId');
        this.loadedRecipe = this.recipeService.getRecipe(recipeId);
      }
    );
  }

  onDeleterecipe() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you want to delete the recipe',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
          // this.router.navigate(['/recipes']);
          this.router.navigateByUrl('');
        }
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
