
import {Action} from "@ngrx/store";
import {__read} from "tslib";

// Load pannels
export const LOAD_PANELS = '[Panels] Load Panles';
export const LOAD_PANELS_SUCCESS = '[Panels] Load Panles Success';
export const LOAD_PANELS_FAIL = '[Panels] Load Panles Fail';

export class LoadPanels implements Action {
  readonly type = LOAD_PANELS;
  constructor() {}
}

export class LoadPanelsSuccess implements Action {
  readonly type = LOAD_PANELS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadPanelsFail implements Action {
  readonly type = LOAD_PANELS_FAIL;
  constructor(public payload: any) {}
}

// Load Wallet
export const LOAD_WALLET = '[Panels] Load Wallet';
export const LOAD_WALLET_SUCCESS = '[Panels] Load Wallet Success';
export const LOAD_WALLET_FAIL = '[Panels] Load Wallet Fail';

export class LoadWallet implements Action {
  readonly type = LOAD_WALLET;
  constructor() {}
}

export class LoadWalletSuccess implements Action {
  readonly type = LOAD_WALLET_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadWalletFail implements Action {
  readonly type = LOAD_WALLET_FAIL;
  constructor(public payload: any) {}
}

export type PanelsAction =
  LoadPanels |
  LoadPanelsSuccess |
  LoadPanelsFail |
  LoadWallet |
  LoadWalletSuccess |
  LoadWalletFail;
