// src/app/models/food-item.model.ts (exemplo de caminho)

export interface FoodItem {
    name: string;
    category: string;
    quantity: number;
    validity: Date; // Usar o tipo Date é uma boa prática
  }