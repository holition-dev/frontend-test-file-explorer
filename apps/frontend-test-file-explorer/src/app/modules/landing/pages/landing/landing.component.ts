import { Component } from '@angular/core';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  public title = 'front-end-test';

  constructor() {
    console.log(this.title);
  }
}
