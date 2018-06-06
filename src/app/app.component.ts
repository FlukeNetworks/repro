import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  photos: any;

  constructor() {
  }

  OnClick() {
    const photos = [];
    for (let i = 0; i < 5000; i++) {
      photos.push({ title: i });
    }
    this.photos = photos;
  }
}
