// src/app/models/food-item.model.ts (exemplo de caminho)

import { FoodCategory } from "./food-category-enum";

export interface FoodItem {
    name: string;
    category: FoodCategory;
    quantity: number;
    validity: Date; // Usar o tipo Date é uma boa prática
  }