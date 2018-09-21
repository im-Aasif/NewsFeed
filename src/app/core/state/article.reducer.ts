import { initialState } from './app.state';
import { Article } from '../models/news-response';
import * as ArticleActions from '../state/article.action';

export function articleReducer(state: Article[] = initialState.articles, action: ArticleActions.Actions) {
    switch (action.type) {
        case ArticleActions.Type.REQUEST:
            return state;
        case ArticleActions.Type.SUCCESS:
            console.log('Article Reducer: ', JSON.stringify(action.payload, null, 2));
            return action.payload;
        default:
            return state;
    }
}
