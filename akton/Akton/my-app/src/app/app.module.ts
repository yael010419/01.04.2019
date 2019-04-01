import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AppRouterModule } from './app-router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginMangerComponent } from './login-manger/login-manger.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { PageStudentComponent } from './page-student/page-student.component';
import { ProfileUserComponent } from './page-student/profile-user/profile-user.component';
import { UserAudioComponent } from './page-student/user-audio/user-audio.component';
import { AllAudioComponent } from './page-student/all-audio/all-audio.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationService } from './AuthenticationService';
import { ServerAPIService } from './server-api.service';
import { MangerEditComponent } from './manger-edit/manger-edit.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginMangerComponent,
    LoginStudentComponent,
    RegisterStudentComponent,
    PageStudentComponent,
    ProfileUserComponent,
    UserAudioComponent,
    AllAudioComponent,
    ErrorComponent,
    WelcomeComponent,
    MangerEditComponent

  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ServerAPIService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
