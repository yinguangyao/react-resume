import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import { PrismCode } from 'react-prism'

class Style extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidUpdate() {
		ReactDOM.findDOMNode(this).scrollTop = 10000;
	}

	render() {
		return (
			<div className="styleEditor">
				<pre>
					<PrismCode className="language-javascript">{this.props.currentStyle}</PrismCode>
				</pre>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentStyle: state.currentStyle||""
	}
}

export default connect(mapStateToProps)(Style)
