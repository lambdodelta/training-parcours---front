import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  listen: Subscription;
  index: Number;
  children_data: any;
  filterTerm : string;
  movies$ = [];

  constructor(public apiservice: ApiService) {
  }

  ngOnInit(): void {
    this.children_data = "default";
    this.apiservice.getShowByFilter("1").subscribe(data => {
      data.shows.forEach ( result => {
        console.log(result)
        this.movies$.push(result);
      })
    })
  }

  selected(event: any ) : void {
    event.currentTarget.style.backgroundColor = 'green';
    this.children_data = this.movies$[1];
  }

  filter_list(tmp : string[]): void {
    this.movies$ = [];
    this.apiservice.getShowByFilter(tmp[1]).subscribe(data => {
      data.shows.forEach ( result => {
        this.movies$.push(result);
      })
      })
    }

  }
