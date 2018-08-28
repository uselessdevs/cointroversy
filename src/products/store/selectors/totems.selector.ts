import { createSelector } from '@ngrx/store';
import * as fromTotems from '../reducers/totems.reducer';
import * as fromFeature from '../reducers';

export const getTotemState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.totems,
);

export const getTotemEntities = createSelector(
  getTotemState,
  fromTotems.getTotemsEntities,
);

export const getTotemLoading = createSelector(
  getTotemState,
  fromTotems.getTotemsLoading,
);

export const getTotemLoaded = createSelector(
  getTotemState,
  fromTotems.getTotemsLoaded,
);
