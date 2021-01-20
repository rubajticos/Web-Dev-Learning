import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs = [];
  displaySecret = false;

  onButtonClick() {
    this.logs.push(new Date());
    this.toggleSecret();
  }

  toggleSecret() {
    this.displaySecret = !this.displaySecret;
  }

}
