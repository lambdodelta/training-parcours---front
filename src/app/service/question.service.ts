import { Injectable } from '@angular/core';
import { QuestionBase } from '../form-data/question-base';
import { TextboxQuestion } from '../form-data/question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // call api pour get les data en json
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'établisement',
        label: 'établisement',
        type: 'email',
        required: true,
        order: 3
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}