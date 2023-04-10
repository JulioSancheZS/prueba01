import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';
import { ResponseApi } from '../interfaces/response-api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = 'api/producto/';
  }


  getProductos(): Observable<ResponseApi> {

    return this.http.get<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Lista`)

  }

  save(request: Producto): Observable<ResponseApi> {

    return this.http.post<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Guardar`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' } })

  }

  edit(request: Producto): Observable<ResponseApi> {

    return this.http.put<ResponseApi>(`$${this.myAppUrl}${this.myApiUrl}Editar`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' } })

  }

  delete(id: number): Observable<ResponseApi> {

    return this.http.delete<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Eliminar/${id}`);

  }
}
