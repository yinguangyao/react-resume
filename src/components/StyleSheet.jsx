import React from 'react'
import HOC from '../share/hoc'
import { PrismCode } from 'react-prism'

const StyleSheet = (props) => {
	const { currentStyle } = props
	return (
		<div className="styleEditor">
			<pre>
				<PrismCode className="language-javascript">{currentStyle}</PrismCode>
			</pre>
		</div>
	)
}

export default HOC(StyleSheet)
