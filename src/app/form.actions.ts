import { Action } from '@ngrx/store';

export enum FormActionTypes {
  LoadAttributes = '[Form] LoadAttributes',
  PostsLoaded = '[Form] PostsLoaded',
  CommentsLoaded = '[Form] CommentsLoaded',
  AlbumsLoaded = '[Form] AlbumsLoaded',
  PhotosLoaded = '[Form] PhotosLoaded',
  TodosLoaded = '[Form] TodosLoaded'
}

export class LoadAttributesAction implements Action {
  readonly type = FormActionTypes.LoadAttributes;
  readonly payload = null;
}

export class PostsLoadedAction implements Action {
  readonly type = FormActionTypes.PostsLoaded;

  constructor(public payload: any) {}
}

export class CommentsLoadedAction implements Action {
  readonly type = FormActionTypes.CommentsLoaded;

  constructor(public payload: any) {}
}

export class AlbumsLoadedAction implements Action {
  readonly type = FormActionTypes.AlbumsLoaded;

  constructor(public payload: any) {}
}

export class PhotosLoadedAction implements Action {
  readonly type = FormActionTypes.PhotosLoaded;

  constructor(public payload: any) {}
}

export class TodosLoadedAction implements Action {
  readonly type = FormActionTypes.TodosLoaded;

  constructor(public payload: any) {}
}
