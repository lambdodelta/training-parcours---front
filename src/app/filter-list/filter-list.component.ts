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
  filterTerm : string;
  movies$ = [];

  constructor(public apiservice: ApiService) {
  }

  ngOnInit(): void {
    this.apiservice.getAllMovie().subscribe(data => {
      data.shows.forEach ( result => {
        this.movies$.push(result);
      })
    })
  }

  selected(event: any ) : void {
    event.currentTarget.style.backgroundColor = 'green';
  }

  filter_list(value : string[]): void {
    this.movies$ = [];
    console.log(value);
    this.apiservice.getShowByFilter(value).subscribe(data => {
      data.shows.forEach ( result => {
        this.movies$.push(result);
      })
      })
    }

  }
