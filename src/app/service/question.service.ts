import { Injectable } from '@angular/core';
import { QuestionBase } from '../generic-form/form-data/question-base';
import { TextboxQuestion } from '../generic-form/form-data/question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // call api pour get les data en json
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'Episode',
        label: 'Episode',
        value: 'EP0',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'Title',
        label: 'Title',
        type: 'email',
        order: 2
      }),

      new TextboxQuestion({
        key: 'Director',
        label: 'Director',
        type: 'email',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'Genre',
        label: 'Genre',
        type: 'email',
        required: true,
        order: 4
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}