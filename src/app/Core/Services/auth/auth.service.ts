import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private httpClient : HttpClient) { }

getToken(username: string, password: string) {
  const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password')
    .set('mobileid', '9cb2fcb2de1c71e8');

    return this.httpClient.post<any>(
      'http://176.9.184.190/token',
      body.toString(),
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      }
    );
}

}
