import { Action, ActionReducer } from '@ngrx/store';
import { ActionTypes } from '../actions/cart.action';
import { ActionModel } from '../models/action.model';
import { CartModel } from '../models/cart.model';
import { ProductModel } from '../models/product.model';

export const cart = new CartModel();

export function cartReducer(state = cart, action: Action) {
  switch (action.type) {
    case ActionTypes.Add: {
      const payload = (action as any).payload as ProductModel;
      const products = [...state.products, payload];
      const total = calculateTotal(products);
      return {
        ...state,
        products,
        total,
      };
    }
    case ActionTypes.Remove: {
      const payload = (action as any).payload as ProductModel;
      const products = state.products.filter((product) => product !== payload);
      const total = calculateTotal(products);
      return {
        ...state,
        products,
        total,
      };
    }
    case ActionTypes.Clear: {
      const emptyCart = new CartModel();
      return {
        ...emptyCart,
        total: calculateTotal(emptyCart.products),
      };
    }
    default:
      return state;
  }
}

function calculateTotal(products: ProductModel[]): number {
  let total: number = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return total;
}
