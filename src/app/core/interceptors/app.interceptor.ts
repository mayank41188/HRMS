import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {

    constructor() { }

    setHeaders() {
        const token = localStorage.getItem('token');
        const params = {};
        let headers: HttpHeaders;
        if (token) {
            params['Authorization'] = `Bearer ${token}`;
            headers = new HttpHeaders(params);
            return headers;
        }
        return headers;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({ headers: this.setHeaders() });
        return next.handle(modifiedReq);
    }
}
