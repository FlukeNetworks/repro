import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  loadPosts() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/posts")
      .map(response => response);
  }

  loadComments() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/comments")
      .map(response => response);
  }

  loadAlbums() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/albums")
      .map(response => response);
  }

  loadPhotos() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/photos")
      .map(response => response);
  }

  loadTodos() {
    return this._http
      .get("https://jsonplaceholder.typicode.com/todos")
      .map(response => response);
  }
}
