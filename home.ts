import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import homeData from './home.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  homeData = homeData;

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + 'đ';
  }
}