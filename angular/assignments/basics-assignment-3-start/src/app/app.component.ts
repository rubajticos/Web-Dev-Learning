import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  i = 1;
  logs = [];
  displaySecret = false;

  onButtonClick() {
    this.logs.push(this.i++);
    this.toggleSecret();
  }

  toggleSecret() {
    this.displaySecret = !this.displaySecret;
  }

}
