import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  clientType: string;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.clientType = this.configService.configData.clientType;
  }
}