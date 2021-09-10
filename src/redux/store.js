import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import composeWithDevTools from "redux-devtools-extension";
// export const store = createStore(
//   reducers /* preloadedState, */,
//   //   {},
//   //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   composeWithDevTools(
//     applyMiddleware(thunk)
//     // other store enhancers if any
//   )
// );

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
export const store = createStore(reducers, enhancer);
