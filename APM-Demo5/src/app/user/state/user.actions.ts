/* NgRx */
import { Action } from '@ngrx/store';
import { User } from '../user';

export enum UserActionTypes {
  MaskUserName = '[User] Mask User Name',
  LoadUser = '[User] Load User'
}

export class MaskUserName implements Action {
  readonly type = UserActionTypes.MaskUserName;

  constructor(public payload: boolean) {}
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LoadUser;

  constructor(public payload: User) {}
}

export type UserActions = MaskUserName | LoadUser;
