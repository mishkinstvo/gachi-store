import { Component } from '@angular/core';

@Component({
  selector: 'app-rotate-bulochka',
  templateUrl: './rotate-bulochka.component.html',
  styleUrls: ['./rotate-bulochka.component.scss']
})
export class RotateBulochkaComponent {

  bulkaDegree: number = 0;

  rotate(): void {
    if (this.bulkaDegree >= 360) {
      this.bulkaDegree = 0;
    }
    this.bulkaDegree += 90;
  }
}
