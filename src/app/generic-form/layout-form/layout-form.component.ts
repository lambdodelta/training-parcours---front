
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { QuestionBase } from '../form-data/question-base';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-layout-form',
  templateUrl: './layout-form.component.html',
  providers:  [QuestionService],
  styleUrls: ['./layout-form.component.css']
})

export class LayoutFormComponent implements OnInit {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZpY3Rpb25hbCBzdHVkZW50IiwibWFpbCI6ImZpY3Rpb25hbC5zdHVkZW50QGVwaXRlY2guZXUiLCJpYXQiOjE2MTc3ODU2MjEsImV4cCI6MTYxNzc5MjgyMX0.0IzNTLs0vYJvORXvpUZut9kpzN7ZtkFw3hZtPhPhTeE'
    })
  };

  dynamicFormArray:any;
  questions$: Observable<QuestionBase<any>[]>;
  errorMessage$: string;
  isLinear = false;
  lambdaFormGroup: FormGroup;
  myFormGroup:FormGroup;
  formTemplate = []; 
  json_data: any[];
  
  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit() {
    let tmp:any;
    this.myFormGroup = this.fb.group({});
    this.httpClient.get("./assets/jsoncuriculi.json").subscribe(data => {
      let tmp = data[0]
      this.json_data = Object.keys(tmp).map(index => { 
          return tmp[index];
        })
      this.dynamicFormArray = this.json_data;
      this.creteFormController(this.json_data);
      },
    (err) => this.errorMessage$ = err.message);
  }

  creteFormController(build: Array<any>): void {
    build.forEach(element => {
      element.forEach(result => {
        if ( result.Required === true ) {
          this.myFormGroup.addControl(result.ID, new FormControl('', Validators.required))
        } else {
          this.myFormGroup.addControl(result.ID, new FormControl(''))
        }
      });
    });
    console.log(this.myFormGroup)
  }

  onSubmit() {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZpY3Rpb25hbCBzdHVkZW50IiwibWFpbCI6ImZpY3Rpb25hbC5zdHVkZW50QGVwaXRlY2guZXUiLCJpYXQiOjE2MTc3ODU2MjEsImV4cCI6MTYxNzc5MjgyMX0.0IzNTLs0vYJvORXvpUZut9kpzN7ZtkFw3hZtPhPhTeE`)
    }
    return this.httpClient.post<any>('http://localhost:3000/api/curriculums', this.myFormGroup.value, header);
  }
}

