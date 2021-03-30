import { Component, OnInit, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() public data = new EventEmitter<{value:string}>();
  filter: string[];

  constructor() { }

  ngOnInit(): void {
  }

  changing(value: string) : void {
    this.data.emit({value});
  }

}
