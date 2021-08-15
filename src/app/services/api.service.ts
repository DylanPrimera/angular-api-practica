import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('http://localhost:9090/api/lista').pipe(map((r) => {
      return r;
    }));
  }

  postData(dato: any): Observable<any> {
    const texto = {texto: dato.value};
    return this.http.post('http://localhost:9090/api/lista', texto).pipe(map((r) => {
      return r;
    }))
  }

  deleteData(id: number | undefined): Observable<any> {
    return this.http.delete(`http://localhost:9090/api/lista/` + id).pipe(map((r) => {
      return r;
    }))
  }

  updateData(dato: any, id: number | undefined): Observable<any> {
    const aux = {texto: dato.value}
    return this.http.put(`http://localhost:9090/api/lista/` + id, aux).pipe(map((r) =>{
      return r;
    }))
  }
}
