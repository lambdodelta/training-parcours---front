
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-layout-form',
  templateUrl: './layout-form.component.html',
  styleUrls: ['./layout-form.component.css']
})

export class LayoutFormComponent implements OnInit {
  
  dynamicFormArray:any;
  errorMessage$: string;
  isLinear = false;
  lambdaFormGroup: FormGroup;
  myFormGroup:FormGroup;
  formTemplate = []; 
  json_data: any[];
  
  constructor(private httpClient: HttpClient, private fb: FormBuilder, private service: ApiService) {
  }

  ngOnInit() {
    let tmp:any;
    this.myFormGroup = this.fb.group({});
    this.service.getToken().subscribe( data => {
      console.log(data.token)
      localStorage.setItem('token', data.token)
    })
    this.httpClient.get("./assets/jsoncuricul.json").subscribe(data => {
      let tmp = data
      this.json_data = Object.keys(tmp).map(index => { 
         return tmp[index];
      })
      console.log(this.json_data);
      this.dynamicFormArray = this.json_data[3];
      this.creteFormController(this.json_data[3]);
      },
    (err) => this.errorMessage$ = err.message);
  }

  creteFormController(build: Array<any>): void {
    build.forEach(element => {
      element.fields.forEach(result => {
        if ( result.required === true ) {
          this.myFormGroup.addControl(result.name, new FormControl('', Validators.required))
        } else {
          this.myFormGroup.addControl(result.name, new FormControl(''))
        }
      });
    });
    console.log(this.myFormGroup)
  }

  onSubmit() {
    this.service.createCurriculum(this.myFormGroup.value, localStorage.getItem('token')).subscribe(data => {
      console.log(data)
    })
  }
}

