import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../interfaces/response-api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = 'api/dashboard/';
  }

  resumen(): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Resumen`)
  }
}
