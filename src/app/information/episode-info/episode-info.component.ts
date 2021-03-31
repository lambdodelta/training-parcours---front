import { Component, OnInit, Input, SimpleChanges  } from '@angular/core';
import { ApiService } from '../../service/api.service'

@Component({
  selector: 'app-episode-info',
  templateUrl: './episode-info.component.html',
  styleUrls: ['./episode-info.component.css']
})
export class EpisodeInfoComponent implements OnInit {

  @Input() data : any;
  episode_data: any[];
  constructor(public apiservice: ApiService) { }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) : void {
    console.log(change.data.currentValue.id)
    this.apiservice.getEpisodeByShow(change.data.currentValue.id).subscribe(data => {
      console.log(data)
      })
    }
}
