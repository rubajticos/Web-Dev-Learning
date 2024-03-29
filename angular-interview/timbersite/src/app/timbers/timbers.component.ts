import { Component, OnInit } from '@angular/core';

interface Timber {
  prodId: number;
  prodName: string;
  category: string;
  prodLength: string;
}

@Component({
  selector: 'app-timbers',
  templateUrl: './timbers.component.html',
  styleUrls: ['./timbers.component.scss'],
})
export class TimbersComponent implements OnInit {
  productsJson: string = `[
      {
        "prodId": "1001",
        "prodName": "140 x 37 CLS Pine Timber",
        "category": "internal",
        "prodLength": "1.2m"
      },
      {
        "prodId": "1002",
        "prodName": "120 x 120 RoughCut Post",
        "category": "roughcut",
        "prodLength": "3.6m"
      },
      {
        "prodId": "1003",
        "prodName": "142 x 142 Incised Rails",
        "category": "roughcut",
        "prodLength": "3.6m"
      }
    ]`;

  timbers: Timber[] = [];

  multiplier: number = 10;
  newMultiplier: number = this.multiplier;

  constructor() {}

  ngOnInit(): void {
    this.getTimbers();
  }

  getTimbers() {
    this.timbers = JSON.parse(this.productsJson);
  }

  getRoughCutTimbers() {
    return this.timbers.filter((v) => v.category === 'roughcut');
  }

  getTimberLength(timber: Timber): number {
    let timberLength: number = +timber.prodLength.replace('m', '');
    return timberLength;
  }

  getTimberLengthMultiplied(timber: Timber) {
    return this.getTimberLength(timber) * this.multiplier;
  }

  onMultiplierAccept() {
    this.multiplier = this.newMultiplier;
  }
}
