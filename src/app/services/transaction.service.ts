import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url = 'https://us-central1-plc-restapi-3b9eb.cloudfunctions.net/transaction/'

  constructor(private http: HttpClient) { }

  searchById(id: any){
    return this.http.get(`${this.url}`+ id);
  }
}
