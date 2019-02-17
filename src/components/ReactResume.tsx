import * as React from 'react'
import HOC from '../share/hoc'
import marked from 'marked'

interface IProps {
	isMarkDown: boolean,
	resumeText: string
}
const Resume: React.SFC<IProps> = (props: IProps) => {
	const { isMarkDown, resumeText } = props;
	return (
		<div className="resumeEditor">
			<pre>
				<code dangerouslySetInnerHTML={{ __html: isMarkDown ? marked(resumeText) : resumeText}}></code>
			</pre>
		</div>
	)
}
export default HOC(Resume)