import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

  submitForm(body: any){
    console.log(body)
    return this.http.post('https://us-central1-plc-restapi-3b9eb.cloudfunctions.net/user', body, {
      observe: 'body'
    });
  }

  // deleteMember(employeeID: string){
  //   const params = {
  //     employeeID: employeeID
  //   };
  //   return 
  // }
}
