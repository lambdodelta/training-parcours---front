import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  dynamicFormArray:any;
  errorMessage$: string;
  isLinear = false;
  lambdaFormGroup: FormGroup;
  myFormGroup:FormGroup;
  formTemplate = []; 
  json_data: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
