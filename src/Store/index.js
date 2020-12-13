import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../Reducer';
import rootSaga from '../Saga';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(sagaMiddleware))
);

// Load sagas into sagaMiddleware
sagaMiddleware.run(rootSaga);