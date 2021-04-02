import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionBase } from '../generic-form/form-data/question-base';
import { TextboxQuestion } from '../generic-form/form-data/question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  json_data: Array<any> = [];

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      let tmp = data.requirements[1].fields;
      this.json_data = Object.keys(tmp).map(index => {
        return tmp[index];
        })
      });
    }

  getQuestions(tab: Array<any>) {
    console.log(tab);
    const questions: QuestionBase<string>[] = [
    ];

    questions.push(
      new TextboxQuestion({
        key: 'Title',
        label: 'Title',
        type: 'email',
        order: 2
      })
    )
    
    return of(questions.sort((a, b) => a.order - b.order));
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/jsoncuricul.json");
  }

}