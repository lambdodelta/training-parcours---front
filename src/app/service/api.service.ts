import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllMovie(): Observable<any> {
    return this.http.get<any>('https://api.betaseries.com/shows/list?limit=5' , {
      headers: {
        'X-BetaSeries-Key' : '0c28af9c6ab6' ,
      }
    })
  }

  getShowByFilter(value: string): Observable<any> {
    console.log(value);
    return this.http.get<any>('https://api.betaseries.com/shows/list?limit=5&order=' + value , {
      headers: {
        'X-BetaSeries-Key' : '0c28af9c6ab6' ,
      }
    })
  }

}
