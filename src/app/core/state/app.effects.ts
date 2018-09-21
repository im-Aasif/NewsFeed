import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { NewsService } from './../services/news.service';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import * as SourceActions from '../state/source.action';
import * as ArticleActions from '../state/article.action';
import { NewsResponse, Article } from './../models/news-response';
import { SourcesResponse } from '../models/sources-response';
import { Observable } from 'rxjs';

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private service: NewsService
    ) { }

    @Effect()
    getSources$: Observable<Action> = this.actions$.pipe(
        ofType(SourceActions.Type.REQUEST),
        switchMap((action: SourceActions.SourceGetRequest) => {

            return this.service.getSources(action.payload);
        }),
        map((response: SourcesResponse) => {
            console.log(JSON.stringify(response, null, 2));

            return new SourceActions.SourceRequestSuccess(response.sources);
        })
    );

    @Effect()
    getArticles$: Observable<Action> = this.actions$.pipe(
        ofType(ArticleActions.Type.REQUEST),
        switchMap((action: ArticleActions.ArticleGetRequest) => {
            return this.service.getArticles(action.payload);
        }),
        map((response: NewsResponse) => {
            // console.log(JSON.stringify(response, null, 2));

            return new ArticleActions.ArticleRequestSuccess(response.articles);
        })
    );
}
