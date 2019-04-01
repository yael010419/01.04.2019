import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  submitted = false;
  constructor(public router: Router) { }

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
