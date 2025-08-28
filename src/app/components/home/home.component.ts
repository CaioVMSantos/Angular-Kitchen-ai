
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-generator',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class RecipeGeneratorComponent {
  ingredientsControl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required]
  });


  generatedRecipe: string = '';
  isLoading: boolean = false;

  constructor() { }


  generateRecipe(): void {

    const ingredients = this.ingredientsControl.value;

    if (this.ingredientsControl.invalid) {
      this.generatedRecipe = 'Por favor, insira alguns ingredientes para começar.';
      return;
    }

    console.log("Ingredientes enviados:", ingredients);

    this.isLoading = true;
    this.generatedRecipe = 'Gerando uma receita deliciosa para você... 🧙‍♂️';

    setTimeout(() => {
      this.generatedRecipe = `**Frango Grelhado com Arroz e Salada de Tomate**\n\n**Ingredientes:**\n- ${ingredients.replace(/\n/g, '\n- ')}\n\n**Modo de Preparo:**\n1. Tempere o frango com sal, pimenta e alho.\n2. Grelhe o frango em fogo médio até dourar.\n3. Cozinhe o arroz normalmente.\n4. Pique o tomate e a cebola e monte a salada.\n5. Sirva tudo junto. Bom apetite!`;
      this.isLoading = false;
    }, 2000);
  }
}