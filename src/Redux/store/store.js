import { createStore, combineReducers} from 'redux';
import reducer from '../reducers/reducer';
import placeReducer from '../reducers/placeReducer';
 
const rootReducer = combineReducers({
 places:placeReducer
});

 
export const store = createStore(rootReducer);