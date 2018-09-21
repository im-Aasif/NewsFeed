import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = environment.baseUrl + req.url;
        const apiReq = req.clone({
            url: url,
            setHeaders: {
                'X-Api-Key': environment.apiKey,
            }
        });
        // console.log(apiReq);
        return next.handle(apiReq);
    }
}
