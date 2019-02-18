import * as React from 'react'
import { render } from 'react-dom'
import {Provider} from 'mobx-react'
import {enableLogging} from 'mobx-logger'

import Container from './components/Container'
// import store from './store'
import './App.css'

render(
	<Container />,
	document.getElementById("app")
)
// enableLogging({
// 	predicate: () => true,
//     action: true,
//     reaction: true,
//     transaction: true,
//     compute: true
// });
