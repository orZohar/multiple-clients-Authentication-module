import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss']
})
export class CaptchaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}
}
