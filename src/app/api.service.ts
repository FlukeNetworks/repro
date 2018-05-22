import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  loadPosts() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/posts")
      .map(response => response.json());
  }

  loadComments() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/comments")
      .map(response => response.json());
  }

  loadAlbums() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/albums")
      .map(response => response.json());
  }

  loadPhotos() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/photos")
      .map(response => response.json());
  }

  loadTodos() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/todos")
      .map(response => response.json());
  }
}
