import { Action } from '@ngrx/store';
import { ParamsRequest } from '../models/params-request';
import { Article } from '../models/news-response';

export enum Type {
    REQUEST = '[Article] GET Request',
    SUCCESS = '[Article] GET Success'
}

export class ArticleGetRequest implements Action {
    readonly type = Type.REQUEST;
    constructor(public payload: ParamsRequest) { }
}

export class ArticleRequestSuccess implements Action {
    readonly type = Type.SUCCESS;
    constructor(public payload: Article[]) {}
}

export type Actions = ArticleGetRequest | ArticleRequestSuccess;
