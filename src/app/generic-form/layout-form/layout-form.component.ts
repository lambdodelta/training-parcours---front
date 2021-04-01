import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { QuestionBase } from '../form-data/question-base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-form',
  templateUrl: './layout-form.component.html',
  providers:  [QuestionService],
  styleUrls: ['./layout-form.component.css']
})
export class LayoutFormComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;
  
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
