import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey } from './config';
import { environment } from './../../environments/environment.prod';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Original Request: ', req);
        const url = environment.baseUrl + req.url;
        const apiReq = req.clone({
            url: url,
            setHeaders: {
                // 'Access-Control-Allow-Origin': '*',
                'X-Api-Key': `${apiKey}`,
                // 'Content-Type': 'application/json'
            }
        });

        console.log('API Request: ', apiReq);

        return next.handle(apiReq);
    }

}
