import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, flatMap } from 'rxjs/operators';

import { ApiService } from './api.service';
import * as ApiActions from "./api.actions";

@Injectable()
export class AppEffects {

  constructor(
    private actions$: Actions,
    private _apiService: ApiService
  ) {}

  @Effect()
  LoadPosts = this.actions$.pipe(
    ofType(ApiActions.ApiActionTypes.LoadAttributes),
    flatMap(action => {
      return this._apiService
        .loadPosts()
        .map(posts => new ApiActions.PostsLoadedAction(posts))
    })
  );

  @Effect()
  LoadComments = this.actions$.pipe(
    ofType(ApiActions.ApiActionTypes.LoadAttributes),
    flatMap(action => {
      return this._apiService
        .loadComments()
        .map(comments => new ApiActions.CommentsLoadedAction(comments))
    })
  );

  @Effect()
  LoadAlbums = this.actions$.pipe(
    ofType(ApiActions.ApiActionTypes.LoadAttributes),
    flatMap(action => {
      return this._apiService
        .loadAlbums()
        .map(comments => new ApiActions.AlbumsLoadedAction(comments))
    })
  );

  @Effect()
  LoadTodos = this.actions$.pipe(
    ofType(ApiActions.ApiActionTypes.LoadAttributes),
    flatMap(action => {
      return this._apiService
        .loadTodos()
        .map(todos => new ApiActions.TodosLoadedAction(todos))
    })
  );
}
