import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import transactionsReducer from '../reducers/transactions';
import billReducer from '../reducers/bills';
import peopleReducer from '../reducers/people';


const composeEnhancers = window.__REDUX_DEVTOOLS_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      transactions: transactionsReducer,
      bills: billReducer,
      people: peopleReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
