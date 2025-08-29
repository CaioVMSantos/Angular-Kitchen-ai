// src/app/services/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodItem } from '../models/food-item.model'; // Importe a interface que criamos

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createFoodItem(foodItem: FoodItem): Observable<FoodItem> {
    return this.http.post<FoodItem>(`${this.apiUrl}/food/criar`, foodItem);
  }

  getFoodItems(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(`${this.apiUrl}/food/listar`);
  }

  getFoodItemById(id: number): Observable<FoodItem> {
    return this.http.get<FoodItem>(`${this.apiUrl}/food/listar/${id}`);
  }

  updateFoodItem(id: number, foodItem: FoodItem): Observable<string> {
    return this.http.put(`${this.apiUrl}/food/atualizar/${id}`, foodItem, { responseType: 'text' });
  }

  deleteFoodItem(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/food/deletar/${id}`, { responseType: 'text' });
  }

  generateRecipe(): Observable<string> {
    return this.http.get(`${this.apiUrl}/gemini/generateRecipe`, { responseType: 'text' });
  }
}