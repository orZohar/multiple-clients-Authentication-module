import { Component, OnInit, ɵConsole } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-restore-password',
  templateUrl: './change-restore-password.component.html',
  styleUrls: ['./change-restore-password.component.scss']
})
export class ChangeRestorePasswordComponent implements OnInit {
  clientType: string;
  isMail: boolean;
  isUsername: boolean;
  isChangeAndRestoreSeperate: boolean;
  isChange: boolean; // if change and restore are seperate check if it's a 'change' or a 'restore'
  constructor(private configService: ConfigService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    // get clientType from config.json file 
    this.clientType = this.configService.configData.clientType;

    // check if it's change or restore (relevant only for yellow and green)
    this.activatedRoute.queryParams.subscribe(result => {
      this.isChange = result.isChange;
    });

    // show fields according to client type
    if (this.clientType === 'blue') {
      this.isChangeAndRestoreSeperate = false;
      this.isUsername = true;
    } else if (this.clientType === 'yellow') {
      this.isChangeAndRestoreSeperate = true;
      this.isMail = true;
    } else {
      this.isChangeAndRestoreSeperate = true;
      this.isUsername = true;
    }
  }
}
