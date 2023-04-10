import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../interfaces/response-api';
import { Venta } from '../interfaces/venta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = 'api/venta/';
  }

 registrar(request: Venta): Observable<ResponseApi> {

   return this.http.post<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Registrar`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' } })

 }

  historal(buscarPor:string,numeroVenta:string,fechaInicio:string,fechaFin:string): Observable<ResponseApi> {

    return this.http.get<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Historial?buscarPor=${buscarPor}&numeroVenta=${numeroVenta}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);

  }

  reporte(fechaInicio: string, fechaFin: string): Observable<ResponseApi> {

    return this.http.get<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Reporte?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);

  }
}
