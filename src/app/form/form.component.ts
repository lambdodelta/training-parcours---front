import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../form-data/question-base';
import { QuestionControlService } from '../service/question-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [ QuestionControlService ],
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
