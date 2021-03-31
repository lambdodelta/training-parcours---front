import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-info',
  templateUrl: './summary-info.component.html',
  styleUrls: ['./summary-info.component.css']
})
export class SummaryInfoComponent implements OnInit {

  @Input() data : any;
  constructor() { }

  ngOnInit(): void {
  }

}
