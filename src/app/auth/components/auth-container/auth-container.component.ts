import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent implements OnInit {
  clientType:string;
  constructor(private configService: ConfigService) { }
  ngOnInit() {
    this.clientType = this.configService.configData.clientType;
  }
}