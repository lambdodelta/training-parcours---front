import { Component, OnInit, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  Hero = [
    { id: 1, name: 'ordre' , nten: [
      "date", "nom"
    ] },
    { id: 2, name: 'récent', nten: [
      "date", "nom"
    ] },
    { id: 3, name: 'genre' , conten: [
      "date", "nom"
    ] }
  ];

  @Output() public data = new EventEmitter<{tmp:string[]}>();
  filter: string[];

  constructor() {}

  ngOnInit(): void {
    for(var i = 0; i < this.Hero.length; i++) {
      this.filter.push("");
    }
  }

  changing(target: any) : void {
    //this.filter[0] = target.value;
    let tmp = this.filter;
    this.data.emit({tmp});
  }

}
