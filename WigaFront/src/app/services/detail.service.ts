import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  getDetails(id: number){
    return this.http.get<Detail[]>('https://localhost:44349/api/detallesfactura/' + id);
  }
}
