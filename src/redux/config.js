import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer/rootReducer";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

const middleWareSaga = createMiddleWareSaga();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleWareSaga))
);
middleWareSaga.run(rootSaga);

// npm i redux-saga
