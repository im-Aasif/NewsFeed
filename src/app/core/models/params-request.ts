import { NewsCategory } from './news-category.enum';

export class SourcesParamsRequest {
    country = 'us';
    category: NewsCategory = NewsCategory.GENERAL;
    language = 'en';
}

export class ParamsRequest extends SourcesParamsRequest {
    sources = 'techcrunch';
    q = 'android';
    pageSize = 20;
    page: number;
}


