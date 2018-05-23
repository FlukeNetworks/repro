import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { State } from "./reducers";
import * as ApiActions from "./api.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _store: Store<State>) {

  }

  OnClick() {
    this._store.dispatch(new ApiActions.LoadAttributesAction());
  }
}
