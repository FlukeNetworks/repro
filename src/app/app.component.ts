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

  photos: Observable<any>;

  constructor(private _store: Store<State>) {
    this.photos = this._store.select(fromRoot.getPhotos);
  }

  OnClick() {
    this._store.dispatch(new ApiActions.LoadAttributesAction());
  }
}
