import { Action } from '@ngrx/store';

// eslint-disable-next-line @ngrx/prefer-action-creator
export class ActionModel implements Action {
  type!: string;
  payload: any;
}
