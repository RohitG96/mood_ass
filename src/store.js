import createStore from 'redux';
import globalReducer from './globalReducer';

const store = createStore(globalReducer);

export default store;