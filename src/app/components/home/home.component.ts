import { Component, OnInit } from '@angular/core';
// Importe o CommonModule para usar diretivas como *ngIf e *ngFor no template
import { CommonModule } from '@angular/common';
// Mantenha o ReactiveFormsModule e adicione FormBuilder para facilitar a criação de formulários
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

// Importe seu serviço e seu modelo
import { ApiService } from '../../services/api.service';
import { FoodItem } from '../../models/food-item.model';
import { FoodCategory } from '../../models/food-category-enum';

@Component({
  selector: 'app-home', // O seletor pode ser 'app-home' ou o que você preferir
  standalone: true,
  // Adicione CommonModule e ReactiveFormsModule aos imports do componente
  imports: [CommonModule, ReactiveFormsModule, MarkdownModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class RecipeGeneratorComponent implements OnInit {

  // --- Propriedades da Classe ---

  // Para a lista de alimentos vinda do backend
  listaDeAlimentos: FoodItem[] = [];

  // Para o formulário de adição de novos alimentos
  foodForm: FormGroup;

  // Para a receita gerada pela IA
  generatedRecipe: string = '';

  // Para controlar o estado de "carregando"
  isLoading: boolean = false;

  // --- Construtor ---

  // Injetamos o ApiService para falar com o backend
  // e o FormBuilder para criar nosso formulário reativo
  availableCategories: string[] = Object.values(FoodCategory)

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    // Inicializamos o formulário reativo aqui
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      category: [FoodCategory.CARNE, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      validity: [null]
    });
  }

  // --- Métodos do Ciclo de Vida ---

  // ngOnInit é executado uma vez quando o componente é iniciado
  ngOnInit(): void {
    this.carregarAlimentos();
  }

  // --- Métodos para Alimentos (CRUD) ---

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
    // Verifica se o formulário é válido antes de enviar
    if (this.foodForm.invalid) {
      console.log('Formulário inválido');
      return;
    }

    this.isLoading = true;
    // Pega os valores do formulário para enviar à API
    const novoAlimento: FoodItem = this.foodForm.value;

    this.apiService.createFoodItem(novoAlimento).subscribe({
      next: () => {
        console.log('Alimento adicionado com sucesso!');
        this.foodForm.reset({ quantity: 1 }); // Limpa o formulário
        this.carregarAlimentos(); // Atualiza a lista na tela
      },
      error: (err) => {
        console.error('Erro ao adicionar alimento', err);
        this.isLoading = false;
      }
    });
  }

  // --- Método para Gerar Receita ---

  // Este método agora chama o backend de verdade!
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