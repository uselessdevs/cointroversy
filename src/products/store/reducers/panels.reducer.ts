import {Panel} from "../../models/panel.model";
import * as fromPanels from '../actions/panels.action';

export interface PanelState {
  entities: { [id: string]: Panel };
  loading: boolean;
  loaded: boolean;
  wallet: string;
}

export const initialState: PanelState = {
  entities: {},
  loading: false,
  loaded: false,
  wallet: '',
};

export function reducer(
  state = initialState,
  action: fromPanels.PanelsAction
) : PanelState {
  switch (action.type) {

    case fromPanels.LOAD_PANELS: {
      return {
        ...state,
        loading: true,
      }
    }

    case fromPanels.LOAD_PANELS_SUCCESS: {
      const panels = action.payload;

      const entities = panels.reduce(
        (entities: { [id: string]: Panel }, panel: Panel) => {
          return {
            ...entities,
            [panel.id]: panel,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromPanels.LOAD_WALLET_SUCCESS: {
      const payload = action.payload;
      const wallet = payload.length ? payload[0] : '';

      return {
        ...state,
        loading: false,
        loaded: false,
        wallet
      }
    }
  }
  return state;
}

export const getPanelsEntities = (state: PanelState) => state.entities;
export const getPanelsLoading = (state: PanelState) => state.loading;
export const getPanelsLoaded = (state: PanelState) => state.loaded;
export const getPanelsWallet = (state: PanelState) => state.wallet;

