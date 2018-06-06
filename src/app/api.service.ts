import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  loadPhotos() {
    // const photosObservable = this._http.get("https://jsonplaceholder.typicode.com/photos");

    const photos = [];
    for (let i = 0; i < 5000; i++ ) {
      photos.push({ title: i });
    }
    const photosObservable = Observable.create(observer => { observer.next(photos); });

    // console.log(`photosObservable: ${JSON.stringify(photosObservable)}`);
    return photosObservable;
  }

}
