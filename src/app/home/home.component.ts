import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../core/services/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientType: string;
  constructor(private configService : ConfigService, private router: Router) { }

  ngOnInit() {
    // get client type from config.json file 
    this.clientType = this.configService.configData.clientType;
  }
}
