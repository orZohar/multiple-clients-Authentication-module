import { Directive, Input, HostBinding, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[loginColor]'
})
export class LoginColorDirective {
  @Input() titleColor: string;
  @Input() buttonBackgroundColor: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.background-color') backgroundColor: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // change yellow button and title to a different type of yellow shade
    if (changes.buttonBackgroundColor) {
      if (changes.buttonBackgroundColor.currentValue === 'yellow') {      
        this.backgroundColor = 'rgb(208, 208, 61)';
      // if it's blue or green 
      } else{
        this.backgroundColor = this.buttonBackgroundColor;
      }
    }
    if (changes.titleColor) {
      if (changes.titleColor.currentValue === 'yellow') {
        this.color = 'rgb(208, 208, 61)';
      // if it's blue or green
      } else{
        this.color = this.titleColor;
      }
    }
}
}