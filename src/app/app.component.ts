import { Component } from '@angular/core';
import { QuestionService } from './service/question.service';
import { QuestionBase } from './generic-form/form-data/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:  [QuestionService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  questions$: Observable<QuestionBase<any>[]>;
  
  constructor(service: QuestionService) {
    
  }
}
