import { Action } from '@ngrx/store';

import { ApiActionTypes } from "../api.actions";

export interface State {
  posts: any[];
  comments: any[];
  albums: any[];
  photos: any[];
  todos: any[];
}

export const initialState: State = {
  posts: [],
  comments: [],
  albums: [],
  photos: [],
  todos: []
};

// TODO: Strong type the action ({type, payload}) param
export function reducer(state = initialState, {type, payload}): State {
  switch (type) {
    case ApiActionTypes.PostsLoaded:
      return Object.assign({}, state, {
        posts: payload
      });
    case ApiActionTypes.CommentsLoaded:
      return Object.assign({}, state, {
        comments: payload
      });
    case ApiActionTypes.AlbumsLoaded:
      return Object.assign({}, state, {
        albums: payload
      });
    case ApiActionTypes.PhotosLoaded:
      return Object.assign({}, state, {
        photos: payload
      });
    case ApiActionTypes.TodosLoaded:
      return Object.assign({}, state, {
        todos: payload
      });
    default:
      return state;
  }
}
