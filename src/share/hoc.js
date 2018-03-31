import React from 'react'
import ReactDOM from 'react-dom'

const hoc = (WrappedComponent) => {
    return class extends React.PureComponent {
        constructor(props) {
            super(props);
        }
        componentDidUpdate() {
            ReactDOM.findDOMNode(this).scrollTop = 10000;
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}
export default hoc