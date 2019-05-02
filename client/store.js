import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import thunk from 'redux-thunk'; // Handling ASYNC
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({ trace: true });
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
