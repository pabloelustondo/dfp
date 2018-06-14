import { Action as NgrxAction } from '@ngrx/store';

/**
 * Create this action to have payload property
 */
export interface Action<T> extends NgrxAction {
  type: string;
  payload?: T;
}
