import { Action } from '@ngrx/store';

export enum ApiActionTypes {
  LoadAttributes = '[Api] LoadAttributes',
  PhotosLoaded = '[Api] PhotosLoaded',
}

export class LoadAttributesAction implements Action {
  readonly type = ApiActionTypes.LoadAttributes;
  readonly payload = null;
}

export class PhotosLoadedAction implements Action {
  readonly type = ApiActionTypes.PhotosLoaded;

  constructor(public payload: any) {}
}
