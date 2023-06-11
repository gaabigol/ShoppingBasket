/* eslint-disable @ngrx/no-typed-global-store */
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel } from 'src/app/models/cart.model';
import { cart } from '../../reducers/cart.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cart$!: Observable<CartModel>;

  constructor(private store: Store<{cart: CartModel}>) {
    this.cart$ = store.pipe(select('cart'));
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
