import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];
  
  onTick(tickNumber: number) {
    if(tickNumber % 2 === 0) {
      this.evenNumbers.push(tickNumber)
    } else {
      this.oddNumbers.push(tickNumber);
    }
  }

}
