import { Component, OnInit, Input, SimpleChanges  } from '@angular/core';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.css']
})
export class EpisodeInfoComponent implements OnInit {

  @Input() data : any;
  episode_data$ = [];
  constructor(public apiservice: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) : void {
    if ( change.data.currentValue != change.data.previousValue && change.data.currentValue !== "default")
    {
      this.episode_data$ = [];
      this.apiservice.getEpisodeByShow(change.data.currentValue.id).subscribe(data => {
        data.episodes.forEach ( result => {
          this.episode_data$.push(result);
        })
      })
    }
  }
}
