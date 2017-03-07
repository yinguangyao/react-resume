import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Prism from "prismjs";

import Resume from './resume.js'
import Style from './style.js'
import { setMarkdown, setStyle, setResume } from '../redux/actions/action'
import { resumeContent, styleContent } from '../assets/data.js'

class ReactResume extends React.Component {
	constructor(props) {
		super(props);
		this.time = 20;
	}

	showStyleContent(n) {
		return new Promise((resolve, reject) => {
			let style = styleContent[n]||"",
				currentStyle = this.props.currentStyle||"";
			let	prevLength = currentStyle.length||0;
			if(!style) { return; }
			let showStyle = () => {
				let addLen = this.props.currentStyle.length - prevLength;
				if(addLen < style.length) {
					let char = style.substring(addLen, addLen+1)||"";
					this.props.setStyle(char);
					setTimeout(showStyle, this.time);
				}else {
					resolve()
				}
			}
			showStyle()
		})
	}
	showResumeContent() {
		return new Promise((resolve, reject) => {
			let len = resumeContent.length||0;
			let showResume = () => {
				let currentLen = this.props.currentResume.length||0;
				if(currentLen < len) {
					let char = resumeContent.substring(currentLen, currentLen+1);
					this.props.setResume(char);
					setTimeout(showResume, this.time);
				}else {
					resolve()
				}
			}
			showResume()
		})
	}

	showHtml() {
		return new Promise((resolve, reject) => {
			this.props.setMarkdown(true);
			resolve();
		})
	}
	async show() {
		await this.showStyleContent(0)
		await this.showResumeContent()
		await this.showStyleContent(1)
		await this.showHtml()
		await this.showStyleContent(2)
	}

	componentDidMount() {
		this.show();
	}
	render() {
		const { currentStyle, currentResume, isMarkdown } = this.props;
		return (
			<div>
				<Style />
				<Resume />
				<style>{currentStyle}</style>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		isMarkdown: state.isMarkdown||false,
		currentStyle: state.currentStyle||"",
		currentResume: state.currentResume||""
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setMarkdown: bindActionCreators(setMarkdown, dispatch),
		setStyle: bindActionCreators(setStyle, dispatch),
		setResume: bindActionCreators(setResume, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactResume)
