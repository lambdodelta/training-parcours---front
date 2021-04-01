import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../form-data/question-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
