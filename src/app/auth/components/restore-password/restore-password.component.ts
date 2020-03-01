import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {
  @Input() isMail: boolean;
  @Input() isUsername: boolean;
  clientType: string;
  
  constructor(private configService : ConfigService) { }

  ngOnInit() {
    this.clientType = this.configService.configData.clientType;
  }
}