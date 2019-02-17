import * as React from 'react'
import HOC from '../share/hoc'
import { PrismCode } from 'react-prism'

interface IProps {
    styleText: string
}
const StyleSheet: React.SFC<IProps> = (props: IProps) => {
	const { styleText } = props
	return (
		<div className="styleEditor">
			<pre>
				<PrismCode className="language-javascript">{styleText}</PrismCode>
			</pre>
		</div>
	)
}

export default HOC(StyleSheet)