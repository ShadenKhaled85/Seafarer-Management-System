import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISeafarer, ISeafarerData } from '../../../Models/ISeafarer';
import { IEmployee } from '../../../Models/iemployee';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SeafarersApiService {

  private token = 'Zmx8WZ4E30uT0TjTd4qRrdAes1H_NFSj4qGPfb2Kn1UuqE9pPjf4bpNsFoIN7_5afxQPsEkEG7sfex31Vpx84AorpaG5gBP25pA2ESjpT7EWV39YJ7ykpJpEf7FLn9jRhhD7ory-pP6p73EP_EgIXieWE1nfR_dMYtrWKPcUdWasIberamTCC6XFbsW-SBynWtQZs-BcH7qCuljG7_KmihVaiO5IDiQDqwudW229aTury2-nz6LOWhTEtQINeAdDugs-Myg7UlXfm0cJ55Oi8ONB_jDWH6GNlOU-_TwZmQk1fAODLxB0f9sT05mxvJfTbLCYLpe7Bt6unliUfZef_tNvJ1FuA3fc6XbwZ1Wf2EJtFg4Lv5Y4I5QlY6KGZO7_Y9mnde2RF8RdlDtRh5lMRAwj-B1JxzBZD8cmatcz0UE-7KNijZ3EAJ1AwsaHpn10iYBPA2lKDtjU8kDO2GhGuRuupgGfCnJUy-9nds5SknjPfOawo539eXFn8baQQUNLoH8EU3nAVUGKR9lHTRZUszA6aAVlhFiGnH3S8ZI5oKA';

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`
  });

  constructor(private httpClient: HttpClient) { }

  getAllSeafarers():Observable<ISeafarer>{
      return this.httpClient.get<ISeafarer>(
      `${environment.baseUrl}/api/MarineServices/GetAllSeafarers?Direction=ltr&InCT`,
      { headers: this.headers }
    );
  }

  fillEmployee(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(
      `${environment.baseUrl}/api/POS/FillEmployee?Id=0&text=&Direction=ltr&InCT`,
      { headers: this.headers }
    );
  }

  fillVendor(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(
      `${environment.baseUrl}/api/LegalAffairs/FillVendor?Id=0&text=&Direction=ltr&InCT`,
      { headers: this.headers }
    );
  }

  activateSeafarerToggle(seafarerId: number, status: number, empId: number): Observable<ISeafarerData[]> {
    return this.httpClient.post<ISeafarerData[]>(
      `${environment.baseUrl}/api/MarineServices/ActivateAndInActivateSeafarer?Id=1013&InCT&Status=2&EmpId=1`,
      { headers: this.headers }
    );
  }
}

