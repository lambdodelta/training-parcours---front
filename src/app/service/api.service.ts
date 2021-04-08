import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllMovie(): Observable<any> {
    return this.http.get<any>('https://api.betaseries.com/shows/list?limit=20' , {
      headers: {
        'X-BetaSeries-Key' : '0c28af9c6ab6' ,
      }
    })
  }

  getToken(): Observable<any> {
    const user = {
      "username" : "fictional student",
      "password": "yyp@BGuj"
    }
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZpY3Rpb25hbCBzdHVkZW50IiwibWFpbCI6ImZpY3Rpb25hbC5zdHVkZW50QGVwaXRlY2guZXUiLCJpYXQiOjE2MTc4MDUwMjMsImV4cCI6MTYxNzgxMjIyM30.byOWelINvTOWii1zhYdN_1GcV-RjK66BJfSuTa4NsLs'
      })
    };
    return this.http.post<any>("http://localhost:3000/api/authenticateScript" , user, httpOptions );
  }

  createCurriculum(objet: any, token: any): Observable<any> { // json
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>("http://localhost:3000/api/curriculums" , objet, httpOptions );
  }

  getShowByFilter(value: string): Observable<any> {
    return this.http.get<any>('https://api.betaseries.com/shows/list?limit=20&order=' + value , {
      headers: {
        'X-BetaSeries-Key' : '0c28af9c6ab6' ,
      }
    })
  }

  getEpisodeByShow(value: number): Observable<any> {
    console.log(value);
    return this.http.get<any>('https://api.betaseries.com/shows/episodes?id=' + value , {
      headers: {
        'X-BetaSeries-Key' : '0c28af9c6ab6' ,
      }
    })
  }

  getJSON(): Observable<any> {
    return this.http.get("./assets/jsoncuricul.json");
  }

}
