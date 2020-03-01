import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  clientType: string;
  isChangeAndRestoreSeperate: boolean;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.clientType = this.configService.configData.clientType;
    // queryparam to ChangeRestorePasswordComponent according to required change and restore password 
    if(this.clientType !== "blue"){
      this.isChangeAndRestoreSeperate = true;
    } else{
      this.isChangeAndRestoreSeperate = false;
    }
}}
