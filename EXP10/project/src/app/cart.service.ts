import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  getCart(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(product: Product): void {
    this.cart = this.cart.filter(p => p.id !== product.id);
  }
}