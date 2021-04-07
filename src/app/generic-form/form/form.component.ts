import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../form-data/question-base';
import { QuestionControlService } from '../../service/question-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [ QuestionControlService ],
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  @Input() form: FormGroup;
  newform = new FormGroup({});
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {}

  onSubmit() {
    console.log(this.newform);
  }

  OnCreate(): void
  {
    this.questions.forEach(question => {
      this.newform.addControl(question.key, new FormControl('', Validators.required));
    })
  }
}
