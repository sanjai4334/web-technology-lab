import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
[x: string]: any;
  cart: Product[] = [];
  product!: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }
}