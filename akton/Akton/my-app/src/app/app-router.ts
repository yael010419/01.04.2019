import { AllAudioComponent } from './page-student/all-audio/all-audio.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { PageStudentComponent } from './page-student/page-student.component';
import { LoginStudentComponent } from './login-student/login-student.component';


import { } from '@angular/forms';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/Router';
import { NgModule } from '@angular/core';

import { LoginMangerComponent } from './login-manger/login-manger.component';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { ProfileUserComponent } from './page-student/profile-user/profile-user.component';
import { ErrorComponent } from './error/error.component';
import { ServerAPIService } from './server-api.service';
import { UserAudioComponent } from './page-student/user-audio/user-audio.component';
import { MangerEditComponent } from './manger-edit/manger-edit.component';







const routes: Routes = [



    {path: '', component : WelcomeComponent},
    { path: 'Login-student', component : LoginStudentComponent },
    { path: 'register-student', component : RegisterStudentComponent },
    { path: 'Login-Manger', component : LoginMangerComponent},
     {path: 'manger-edit', component: MangerEditComponent},

  
         
      {path: 'page-student', component: PageStudentComponent, canActivate: [ServerAPIService]},
    {path: 'page-student', component: PageStudentComponent, canActivate: [ServerAPIService], children: [
     {path: 'all-audio', component: AllAudioComponent, canActivateChild: [ServerAPIService] },
        {path: 'profile-user', component: ProfileUserComponent , canActivateChild: [ServerAPIService] },
        {path: 'user-audio', component: UserAudioComponent, canActivateChild: [ServerAPIService] }
      ]},




    {path: '404-not-found', component: ErrorComponent},
    {path: '**', redirectTo: '/404-not-found'}
  ];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRouterModule {

}
