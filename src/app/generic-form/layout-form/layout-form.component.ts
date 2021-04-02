import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { QuestionBase } from '../form-data/question-base';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-form',
  templateUrl: './layout-form.component.html',
  providers:  [QuestionService],
  styleUrls: ['./layout-form.component.css']
})
export class LayoutFormComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private service: QuestionService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    let resultJson: Array<any> = [];
      this.service.getJSON().subscribe(data => {
        let tmp = data.requirements[1].fields;
        resultJson = Object.keys(tmp).map(index => {
          console.log(tmp[index]);
          return tmp[index];
          })
        });
    this.questions$ = this.service.getQuestions(resultJson);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
