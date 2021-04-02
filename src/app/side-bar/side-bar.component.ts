import { Component, OnInit, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  Hero = [
    { id: 1, name: 'ordre' , nten: [
      "tous", "alphabetical"
    ] },
    { id: 2, name: 'récent', nten: [
      "tous", "récent"
    ] },
    { id: 3, name: 'genre' , conten: [
      "tous", "nom"
    ] }
  ];

  @Output() public data = new EventEmitter<any>();
  filter_term: string[] = [];

  constructor() {}

  ngOnInit(): void {
    for(var i = 0; i < this.Hero.length; i++) {
      this.filter_term.push("");
    }
  }

  changing(target: any) : void {
    this.filter_term[target.id] = target.value;
    let tmp = this.filter_term;
    this.data.emit(tmp);
  }

}
