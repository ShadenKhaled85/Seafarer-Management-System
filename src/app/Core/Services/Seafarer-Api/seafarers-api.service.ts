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

  private get headers() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

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
}

