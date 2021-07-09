import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer/rootReducer";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

const middleWareSaga = createMiddleWareSaga();
export const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga);

// npm i redux-saga
