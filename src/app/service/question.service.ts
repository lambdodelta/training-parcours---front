
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../generic-form/form-data/question-base';
import { TextboxQuestion } from '../generic-form/form-data/question-textbox';
import { of } from 'rxjs';

const LIMIT= 6;

@Injectable()
export class QuestionService {
  json_data: Array<any> = [];
  questions: QuestionBase<string>[] = [];
  constructor(private http: HttpClient) {
    let i = 0;
    this.getJSON().subscribe(data => {
      let tmp = data.requirements[1].fields;
      this.json_data = Object.keys(tmp).map(index => { 
        if (i < 2 ) {
          i++;
          return tmp[index];
        }
        })
      this.buildQuestions(this.json_data)
      });
    }

  buildQuestions(tab: Array<any>) {
    tab.forEach( element => {
      if (element != undefined  )
      {
        this.questions.push(      
          new TextboxQuestion({
          key: element.name,
          label: element.name,
          value: element.order,
          required: true,
          order: element.order
          })
        )
      }
    })
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/jsoncuricul.json");
  }

  public getQuestions() : any {
    return of(this.questions.sort((a, b) => a.order - b.order));
  }

}