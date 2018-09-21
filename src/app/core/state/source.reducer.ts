import { initialState } from './app.state';
import * as SourceActions from '../state/source.action';
import { Source } from '../models/sources-response';

export function sourceReducer(state: Source[] = initialState.sources, action: SourceActions.Actions) {

    switch (action.type) {
        case SourceActions.Type.REQUEST:
            return state;
        case SourceActions.Type.SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
