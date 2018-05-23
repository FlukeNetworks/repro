import { Action } from '@ngrx/store';

export enum ApiActionTypes {
  LoadAttributes = '[Api] LoadAttributes',
  PostsLoaded = '[Api] PostsLoaded',
  CommentsLoaded = '[Api] CommentsLoaded',
  AlbumsLoaded = '[Api] AlbumsLoaded',
  PhotosLoaded = '[Api] PhotosLoaded',
  TodosLoaded = '[Api] TodosLoaded'
}

export class LoadAttributesAction implements Action {
  readonly type = ApiActionTypes.LoadAttributes;
  readonly payload = null;
}

export class PostsLoadedAction implements Action {
  readonly type = ApiActionTypes.PostsLoaded;

  constructor(public payload: any) {}
}

export class CommentsLoadedAction implements Action {
  readonly type = ApiActionTypes.CommentsLoaded;

  constructor(public payload: any) {}
}

export class AlbumsLoadedAction implements Action {
  readonly type = ApiActionTypes.AlbumsLoaded;

  constructor(public payload: any) {}
}

export class PhotosLoadedAction implements Action {
  readonly type = ApiActionTypes.PhotosLoaded;

  constructor(public payload: any) {}
}

export class TodosLoadedAction implements Action {
  readonly type = ApiActionTypes.TodosLoaded;

  constructor(public payload: any) {}
}
