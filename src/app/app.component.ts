import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from "./reducers";
import * as ApiActions from "./api.actions";
import * as fromRoot from "./reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Observable<any>;
  comments: Observable<any>;
  albums: Observable<any>;
  photos: Observable<any>;
  todos: Observable<any>;

  constructor(private _store: Store<State>) {
    this.posts = this._store.select(fromRoot.getPosts);
    this.comments = this._store.select(fromRoot.getComments);
    this.albums = this._store.select(fromRoot.getAlbums);
    this.photos = this._store.select(fromRoot.getPhotos);
    this.todos = this._store.select(fromRoot.getTodos);
  }

  OnClick() {
    this._store.dispatch(new ApiActions.LoadAttributesAction());
  }
}
