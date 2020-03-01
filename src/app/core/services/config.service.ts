import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configData: any;
  constructor(public http: HttpClient) {}

  public loadConfig(): Promise<void> {
    return this.http.get("./assets/config/config.json?v=")
      .toPromise().then(result => {
        this.configData = result;
      });
  }
}
