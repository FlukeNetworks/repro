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


export const getMain = (state: State) => state.main;
export const getPosts = createSelector(getMain, fromMain.getPosts);
export const getComments = createSelector(getMain, fromMain.getComments);
export const getAlbums = createSelector(getMain, fromMain.getAlbums);
export const getPhotos = createSelector(getMain, fromMain.getPhotos);
export const getTodos = createSelector(getMain, fromMain.getTodos);
