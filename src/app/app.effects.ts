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
  LoadPhotos = this.actions$.pipe(
    ofType(ApiActions.ApiActionTypes.LoadAttributes),
    flatMap(action => {
      return this._apiService
        .loadPhotos()
        .map(comments => new ApiActions.PhotosLoadedAction(comments))
    })
  );

}
