import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from 'app/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployeeList(page?: number, size?: number,):Observable<any>{
    let params = new HttpParams;
    if (page) {
      params = params.append('page', page.toString());
    }
    if (size) {
      params = params.append('size', size.toString());
    }
    return this.http.get(ApiUrls.GET_EMPLOYEE,{params})
  }
}
