import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  url = 'https://us-central1-plc-restapi-3b9eb.cloudfunctions.net/user/'
  constructor(private http: HttpClient) { }

  submitForm(body: any){
    // console.log(body)
    return this.http.post(`${this.url}`, body, {
      observe: 'body'
    });
  }

  getAll(){
    return this.http.get(`${this.url}`, {
      observe: 'body'
    });
  }

  getById(id: any){
    return this.http.get(`${this.url}`+ id);
  }
  
  delete(id: any){
    return this.http.delete(`${this.url}`+ id);
  }
  
  updateUser(id: any, body: any){
    console.log(body)
    return this.http.patch(`${this.url}`+ id, body, {
      observe: 'body'
    });
  }
}
