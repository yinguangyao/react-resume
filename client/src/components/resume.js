import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'
import marked from 'marked'

class Resume extends React.Component {

	componentDidUpdate() {
		ReactDOM.findDOMNode(this).scrollTop = 10000;
	}

	render() {
		let { isMarkdown=false, currentResume="" } = this.props;
		return (
			<div className="resumeEditor">
				<pre>
					<code dangerouslySetInnerHTML={{ __html: isMarkdown ? marked(currentResume) : currentResume}}></code>
				</pre>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentResume: state.currentResume,
		isMarkdown: state.isMarkdown
	}
}

export default connect(mapStateToProps)(Resume)