import { environment } from './../../environment/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
        `${environment.baseUrl}/token`,
        body.toString(),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
          })
        }
      );
  }

}
