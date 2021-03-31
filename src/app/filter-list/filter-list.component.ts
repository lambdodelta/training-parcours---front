import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  @Input('class')
klass: string

@Input()
ngClass: string | string[] | Set<string> | { [klass: string]: any; }

  select: any;
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
    console.log(this.movies$[event.currentTarget.id].id)
    this.select = this.movies$[event.currentTarget.id].id
    this.children_data = this.movies$[event.currentTarget.id];
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
