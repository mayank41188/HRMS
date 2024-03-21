import { Injectable } from '@angular/core';
import * as apiConstant from '../api.const'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployeeList(
    page?: number,
    size?: number,
  ): Observable<any> {
    let params = new HttpParams();
    if (page) {
      params = params.append('page', page.toString());
    }
    if (size) {
      params = params.append('size', size.toString());
    }
    return this.http.get(apiConstant.employeeList.GET_EMP_LIST,
    {params})
      
  }
}