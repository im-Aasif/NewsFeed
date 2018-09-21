import { Component, OnInit } from '@angular/core';
import { Source } from '../core/models/sources-response';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../core/state/app.state';

import * as SourceActions from '../core/state/source.action';
import { SourcesParamsRequest } from './../core/models/params-request';
import { NewsCategory } from '../core/models/news-category.enum';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  sources: Observable<Source[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.sources = this.store.select('source');

    const params = new SourcesParamsRequest();
    params.category = NewsCategory.TECHNOLOGY;
    console.log(JSON.stringify(params, null, 2));

    this.store.dispatch(new SourceActions.SourceGetRequest(params));
}

}
