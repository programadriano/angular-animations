import { Component, state, style, transition, animate, trigger } from '@angular/core';

@Component({
  selector: 'app-example01',
  moduleId: module.id,
  templateUrl: 'example01.component.html',
  animations: [
    trigger('stretch', [
      state('normal', style({ width: '40px' })),
      state('stretched', style({ width: '120px' })),
      transition('normal => stretched', animate('300ms')),
      transition('stretched => normal', animate('500ms'))
    ])
  ]
})
export class Example01Component {

  NORMAL_STATE = 'normal';

  STRETCHED_STATE = 'stretched';

  buttonState = this.NORMAL_STATE;

  changeState() {
    this.buttonState === this.NORMAL_STATE ?
      this.buttonState = this.STRETCHED_STATE : this.buttonState = this.NORMAL_STATE;
  }
}
