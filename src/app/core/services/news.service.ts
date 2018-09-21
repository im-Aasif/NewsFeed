import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SourcesParamsRequest, ParamsRequest } from './../models/params-request';
import { NewsResponse } from './../models/news-response';
import { SourcesResponse } from '../models/sources-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getSources(sourcesParams: SourcesParamsRequest): Observable<SourcesResponse> {
    const params = new HttpParams()
      .set('country', sourcesParams.country)
      .set('category', sourcesParams.category)
      .set('language', sourcesParams.language);

    return this.http.get<SourcesResponse>('/sources', { params: params });
  }

  getArticles(newsParams: ParamsRequest): Observable<NewsResponse> {
    const params = new HttpParams()
      .set('q', newsParams.q)
      // .set('sources', newsParams.sources)
      .set('pageSize', newsParams.pageSize.toString());
      // .set('language', newsParams.language)
      // .set('country', newsParams.country)
      // .set('category', newsParams.category);

    return this.http.get<NewsResponse>('/everything', { params: params });
  }

}
