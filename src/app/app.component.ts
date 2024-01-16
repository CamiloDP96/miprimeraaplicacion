import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miprimeraaplicacion';
}
// import necessary module

@Component({
  selector: 'profile-image',
  template: `
    <img src="assets/imagen.jpg" alt="My Image" class="profile-picture">
  `,
  styleUrls: ['./app.component.css'],
})
export class ProfileImageComponent {
  // Your component logic goes here
  title = 'miprimeraaplicacion';
}