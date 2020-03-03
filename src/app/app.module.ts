import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '../app/auth/auth.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigService } from './core/services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

export function initializeApp1(configService: ConfigService) {
  return (): Promise<any> => { 
    return configService.loadConfig();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [ 
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [ConfigService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
