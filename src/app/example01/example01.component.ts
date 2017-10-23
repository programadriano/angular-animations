import { Component, OnInit, state, style, transition, animate, trigger } from '@angular/core';


@Component({
  selector: 'app-example01',
  templateUrl: './example01.component.html',
  styleUrls: ['./example01.component.css'],
  animations: [
    trigger('stretch', [
      state('normal', style({ width: '40px' })),
      state('stretched', style({ width: '120px' })),
      transition('normal => stretched', animate('300ms')),
      transition('stretched => normal', animate('500ms'))
    ])
  ]
})
export class Example01Component implements OnInit {

  constructor() { }

  buttonState = 'normal';

  changeState() {
    if (this.buttonState == 'normal') {
      this.buttonState = 'stretched';
    }else{
      this.buttonState = 'normal';
    }
  }

  ngOnInit() {
  }

}
