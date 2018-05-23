import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromMain from "./main.reducer";

export interface State {
  main: fromMain.State
}

export const reducers: ActionReducerMap<State> = {
  main: fromMain.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
