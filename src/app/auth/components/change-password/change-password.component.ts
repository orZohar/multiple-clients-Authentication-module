import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  clientType: string;

  //Restore password parameters
  isMail: boolean;
  isUsername: boolean;
  
  constructor(private configService : ConfigService) { }
  ngOnInit() {
    this.clientType = this.configService.configData.clientType;
 }
}
