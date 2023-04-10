import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { ResponseApi } from '../interfaces/response-api';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = 'api/usuario/';
  }

  getIniciarSesion(correo: string, clave: string): Observable<ResponseApi> {

    return this.http.get<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}IniciarSesion?correo=${correo}&clave=${clave}`)
  }

  getUsuarios(): Observable<ResponseApi> {

    return this.http.get <ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Lista`)

  }

  saveUsuario(request:Usuario): Observable<ResponseApi> {

    return this.http.post<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Guardar`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' }})

  }

  editUsuario(request: Usuario): Observable<ResponseApi> {

    return this.http.put<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Editar`, request, { headers: { 'Content-Type': 'application/json;charset=utf-8' } })

  }

deleteUsuario(id: number): Observable<ResponseApi> {

    return this.http.delete<ResponseApi>(`${this.myAppUrl}${this.myApiUrl}Eliminar/${id}`);

  }
}
