import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() tick = new EventEmitter<number>(); 
  num = 0;
  interval;

  constructor() { }

  ngOnInit(): void {
  }

  incrementTick() {
    const num = this.num++;
    this.tick.emit(num)
  }

  startGame() {
    this.interval = setInterval( () => {
      this.tick.emit(++this.num);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

}
