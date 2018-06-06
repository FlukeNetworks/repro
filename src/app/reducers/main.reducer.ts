import { Action } from '@ngrx/store';

import { ApiActionTypes } from "../api.actions";

export interface State {
  photos: any[];
}

export const initialState: State = {
  photos: []
};

export function reducer(state = initialState, {type, payload}): State {
  switch (type) {
    case ApiActionTypes.PhotosLoaded:
      return Object.assign({}, state, {
        photos: payload
      });
    default:
      return state;
  }
}

export const getPhotos = (state: State) => state.photos;
