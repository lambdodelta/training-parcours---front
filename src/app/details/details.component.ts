import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() data: any;
  
  constructor( ) { }

  ngOnInit(): void {
  }

}
