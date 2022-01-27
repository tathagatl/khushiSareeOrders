
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import ordersReducer from './reducers/orders';

const rootReducer = combineReducers({
    orders: ordersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));