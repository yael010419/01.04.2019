import { Router, RouterLinkActive } from '@angular/Router';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../AuthenticationService';
import { ServerAPIService } from '../server-api.service';


@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  submitted = false;

  constructor( public router: Router, public authenticationService: AuthenticationService, public serverAPIService: ServerAPIService) { }

  ngOnInit() {
  }



  @ViewChild('form')
  form: NgForm;
  onSubmit() {
    
      this.submitted = true;
      console.log(this.form);
      console.log(this.form.value);
      this.router.navigateByUrl('page-student');
    


  }
}
