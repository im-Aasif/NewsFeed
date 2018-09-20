import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getSources(category: string, language: string = 'en'): Observable<any> {
    // const params = {
    //    'category': category,
    //    'country': country,
    //    'language': language
    // };
    const params = new HttpParams()
    .set('category', category)
    .set('language', language);

    return this.http.get<any>('/sources', { params: params });
  }
}
