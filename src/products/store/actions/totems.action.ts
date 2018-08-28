import { Action } from '@ngrx/store';

export const LOAD_TOTEMS = '[Totems] Load Totems';
export const LOAD_TOTEMS_SUCCESS = '[Totems] Load Totems Success';
export const LOAD_TOTEMS_FAIL = '[Totems] Load Totems Fail';

export class LoadTotems implements Action {
  readonly type = LOAD_TOTEMS;
  constructor() {};
}

export class LoadTotemsSuccess implements Action {
  readonly type = LOAD_TOTEMS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadTotemsFail implements Action {
  readonly type = LOAD_TOTEMS_FAIL;
  constructor(public payload: any) {}
}

export type TotemsAction =
  LoadTotems |
  LoadTotemsSuccess |
  LoadTotemsFail;

