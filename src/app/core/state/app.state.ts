import { Source } from '../models/sources-response';
import { Article } from './../models/news-response';

export class AppState {
    sources: Source[];
    articles: Article[];
}

export const initialState: AppState = {
    sources: [],
    articles: []
};

