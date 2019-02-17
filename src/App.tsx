import * as React from 'react'
import { render } from 'react-dom'
import {Provider} from 'mobx-react'

import Container from './components/Container'
import store from './store'
import './App.css'

render(
	<Provider store={store}>
		<Container />
	</Provider>,
	document.getElementById("app")
)
