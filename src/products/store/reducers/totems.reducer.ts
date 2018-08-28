import * as fromTotems from '../actions/totems.action';
import {Totem} from "../../models/totem.model";
import {LOAD_PANELS} from "../actions/panels.action";

export interface TotemState {
  entities: { [id: string] : Totem };
  loading: boolean;
  loaded: boolean
}

export const initialState: TotemState = {
  entities: {},
  loading: false,
  loaded: false,
};

export function reducer(
  state = initialState,
  action: fromTotems.TotemsAction,
): TotemState {
  switch (action.type) {
    case fromTotems.LOAD_TOTEMS: {
      return {
        ...state,
        loading: true,
      }
    }
  }
}

export const getTotemsEntities = (state: TotemState) => state.entities;
export const getTotemsLoading = (state: TotemState) => state.loading;
export const getTotemsLoaded = (state: TotemState) => state.loaded;
