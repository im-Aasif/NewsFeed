import { Component, OnInit } from '@angular/core';
import { Article } from './../core/models/news-response';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../core/state/app.state';
import * as ArticleActions from '../core/state/article.action';
import { ParamsRequest } from '../core/models/params-request';
import { NewsCategory } from '../core/models/news-category.enum';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.articles = this.store.select('article');

    const params: ParamsRequest = new ParamsRequest();
    // params.category = NewsCategory.TECHNOLOGY;
    params.q = 'android';
    console.log(JSON.stringify(params, null, 2));

    this.store.dispatch(new ArticleActions.ArticleGetRequest(params));
}



}
