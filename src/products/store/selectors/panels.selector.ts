import { createSelector } from "@ngrx/store";

import * as fromFeature from '../reducers';
import * as fromPanels from '../reducers/panels.reducer'
import * as fromRoot from '../../../app/store';

import {Panel} from "../../models/panel.model";

export const getPanelState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.panels,
);

export const getPanelsEntities = createSelector(
  getPanelState,
  fromPanels.getPanelsEntities,
);

export const getAllPanels = createSelector(getPanelsEntities, entities => {
  return Object.keys(entities).map(id => entities[id]);
});

export const getPanelsLoading = createSelector(
  getPanelState,
  fromPanels.getPanelsLoading,
);

export const getPanelsLoaded = createSelector(
  getPanelState,
  fromPanels.getPanelsLoaded,
);

export const getPanelsWallet = createSelector(
  getPanelState,
  fromPanels.getPanelsWallet,
);


