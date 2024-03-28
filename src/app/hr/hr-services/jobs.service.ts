import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from 'app/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http:HttpClient) { }

  getJobList(page?: number, size?: number,):Observable<any>{
    let params = new HttpParams;
    if (page) {
      params = params.append('page', page.toString());
    }
    if (size) {
      params = params.append('size', size.toString());
    }
    return this.http.get(ApiUrls.GET_JOBS,{params})
  }
}
