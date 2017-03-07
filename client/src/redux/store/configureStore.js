import React from 'react'
import { createStore } from 'redux'

import rootReducer from '../reducers/rootReducer.js'

const configureStore = (initialStore) => {
	const store = createStore(rootReducer, initialStore);
	return store;
}

export default configureStore