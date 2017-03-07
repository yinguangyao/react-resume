import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './redux/store/configureStore.js'
import ReactResume from './components/ReactResume.js'
import './app.css'


const store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
render(
	<Provider store={store}>
		<ReactResume />
	</Provider>,
	document.getElementById("app")
)
