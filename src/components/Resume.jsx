import React from 'react'
import HOC from '../share/hoc'
import marked from 'marked'

const Resume = (props) => {
	const { isMarkdown, currentResume } = props
	return (
		<div className="resumeEditor">
			<pre>
				<code dangerouslySetInnerHTML={{ __html: isMarkdown ? marked(currentResume) : currentResume}}></code>
			</pre>
		</div>
	)
}
export default HOC(Resume)
