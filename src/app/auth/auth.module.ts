import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RestorePasswordComponent } from './components/restore-password/restore-password.component';
import { HelpComponent } from './components/help/help.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { CaptchaComponent } from './components/captcha/captcha.component';
import { RememberMeComponent } from './components/remember-me/remember-me.component';
import { ChangeRestorePasswordComponent } from './components/change-restore-password/change-restore-password.component';
import { LoginColorDirective } from './directives/login-color.directive';


@NgModule({
  declarations: [LoginComponent,CaptchaComponent, ChangeRestorePasswordComponent, LoginColorDirective, RememberMeComponent, RegisterComponent, ChangePasswordComponent,RestorePasswordComponent, HelpComponent, AuthContainerComponent, CaptchaComponent, RememberMeComponent, ChangeRestorePasswordComponent, LoginColorDirective],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  exports:[]
})
export class AuthModule { }
