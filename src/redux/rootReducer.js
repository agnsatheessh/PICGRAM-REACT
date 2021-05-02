import { combineReducers } from "redux";

import picGramReducer from './picgram/picgramReducer';

const rootReducer = combineReducers({
    posts : picGramReducer
});

export default rootReducer;