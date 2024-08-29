import { createStore } from 'redux';
import { checkReducer } from './reducer';

export const store = createStore(checkReducer);
