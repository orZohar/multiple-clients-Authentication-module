import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { ChangeRestorePasswordComponent } from './components/change-restore-password/change-restore-password.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [

        { path: '', component: AuthContainerComponent,
          children: [
            { path: 'login', component: LoginComponent},
            { path: 'register', component: RegisterComponent},
            { path: 'change-restore-password', component: ChangeRestorePasswordComponent }, // page container for both restore and change 
            { path: 'help', component: HelpComponent }, // relavnt for green client only
          ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
