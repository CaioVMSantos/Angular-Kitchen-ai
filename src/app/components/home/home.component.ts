import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { ApiService } from '../../services/api.service';
import { FoodItem } from '../../models/food-item.model';
import { FoodCategory } from '../../models/food-category-enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MarkdownModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class RecipeGeneratorComponent implements OnInit {

  listaDeAlimentos: FoodItem[] = [];
  foodForm: FormGroup;
  generatedRecipe: string = '';
  isLoading: boolean = false;
  availableCategories: string[] = Object.values(FoodCategory)

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      category: [FoodCategory.CARNE, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      validity: [null]
    });
  }

  ngOnInit(): void {
    this.carregarAlimentos();
  }

  carregarAlimentos(): void {
    this.isLoading = true;
    this.apiService.getFoodItems().subscribe({
      next: (data) => {
        this.listaDeAlimentos = data;
        this.isLoading = false;
        console.log('Alimentos carregados com sucesso!');
      },
      error: (err) => {
        console.error('Erro ao carregar alimentos', err);
        this.isLoading = false;
      }
    });
  }

  onAdicionarAlimento(): void {
    if (this.foodForm.invalid) {
      console.log('Formulário inválido');
      return;
    }

    this.isLoading = true;
    const novoAlimento: FoodItem = this.foodForm.value;

    this.apiService.createFoodItem(novoAlimento).subscribe({
      next: () => {
        console.log('Alimento adicionado com sucesso!');
        this.foodForm.reset({ quantity: 1 });
        this.carregarAlimentos();
      },
      error: (err) => {
        console.error('Erro ao adicionar alimento', err);
        this.isLoading = false;
      }
    });
  }

  generateRecipe(): void {
    this.isLoading = true;
    this.generatedRecipe = 'Gerando uma receita deliciosa para você... 🧙‍♂️';

    this.apiService.generateRecipe().subscribe({
      next: (recipe) => {
        this.generatedRecipe = recipe;
        this.isLoading = false;
        console.log('Receita recebida do backend!');
      },
      error: (err) => {
        console.error('Erro ao gerar receita', err);
        this.generatedRecipe = 'Desculpe, a IA está ocupada e não pôde gerar uma receita agora. Tente mais tarde.';
        this.isLoading = false;
      }
    });
  }
}