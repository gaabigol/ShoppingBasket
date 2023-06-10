import { Action } from '@ngrx/store';
import { ProductModel } from '../models/product.model';

export enum ActionTypes {
  Add = 'ADD',
  Remove = 'REM',
  Clear = 'CLE',
}

export const add = (product: ProductModel) => {
  return <Action>{ type: ActionTypes.Add, payload: product };
};

export const remove = (product: ProductModel) => {
  return <Action>{ type: ActionTypes.Remove, payload: product };
};

export const clear = () => {
  return <Action>{ type: ActionTypes.Clear, payload: null };
};
