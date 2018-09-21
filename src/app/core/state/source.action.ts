import { Action } from '@ngrx/store';
import { SourcesParamsRequest } from '../models/params-request';
import { Source } from '../models/sources-response';

export enum Type {
    REQUEST = '[Source] GET Request',
    SUCCESS = '[Source] GET Success'
}

export class SourceGetRequest implements Action {
    readonly type = Type.REQUEST;
    constructor(public payload: SourcesParamsRequest) { }
}

export class SourceRequestSuccess implements Action {
    readonly type = Type.SUCCESS;
    constructor(public payload: Source[]) { }
}

export type Actions = SourceGetRequest | SourceRequestSuccess;
