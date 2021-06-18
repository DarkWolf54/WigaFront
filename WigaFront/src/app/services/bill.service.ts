import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  getBillsById(id: number){
    return this.http.get<Bill[]>('https://localhost:44349/api/facturas/' + id);
  }
}
