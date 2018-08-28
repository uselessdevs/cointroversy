import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPanels from './panels.reducer';
import * as fromTotems from './totems.reducer';
import * as fromComments from './comments.reducer';

export interface ProductsState {
  panels: fromPanels.PanelState;
  totems: fromTotems.TotemState;
  comments: fromComments.CommentState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  panels: fromPanels.reducer,
  totems: fromTotems.reducer,
  comments: fromComments.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);
