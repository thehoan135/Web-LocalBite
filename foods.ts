import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import foodsData from './foods.json';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './foods.html',
  styleUrls: ['./foods.css'],
})
export class Foods {
  foods = foodsData;
  selectedFood: any = null;
  newFood: any = { name: '', price: 0, category: '', regionTag: '', img: '', status: 'available' };
  searchTerm = '';

  isAdding = false;

  getStatusLabel(food: any) {
    return food.status === 'available' ? 'Đang bán' : 'Ngừng bán';
  }

  addFood() {
    this.foods.push({ ...this.newFood, id: Date.now().toString() });
    this.newFood = { name: '', price: 0, category: '', regionTag: '', img: '', status: 'available' };
    this.isAdding = false;
  }

  editFood(food: any) {
    this.selectedFood = { ...food };
  }

  saveEditedFood() {
    const index = this.foods.findIndex(f => f.id === this.selectedFood.id);
    if (index !== -1) {
      this.foods[index] = this.selectedFood;
    }
    this.selectedFood = null;
  }

  deleteFood(id: string) {
    this.foods = this.foods.filter(f => f.id !== id);
  }
}
