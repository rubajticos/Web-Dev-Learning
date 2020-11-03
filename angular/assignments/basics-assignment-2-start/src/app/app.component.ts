import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  isUsernameEmpty(): boolean {
    return this.username === '';
  }

  resetUsername() {
    this.username = '';
  }
}
