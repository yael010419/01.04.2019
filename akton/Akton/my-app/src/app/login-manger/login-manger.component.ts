import { ServerAPIService } from './../server-api.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/Router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login-manger',
  templateUrl: './login-manger.component.html',
  styleUrls: ['./login-manger.component.css']
})
export class LoginMangerComponent implements OnInit , OnChanges , OnDestroy {
  constructor(public router: Router, private server: ServerAPIService) { }

  submitted = false;
  subscription: Subscription;

  ngOnInit() {
  }

  @ViewChild('form')
  form: NgForm;
  onSubmit() {

    this.submitted = true;
    console.log(this.form);
    console.log(this.form.value);
   
    
  }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
     }
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }


}
