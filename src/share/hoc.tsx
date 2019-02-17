import * as React from 'react'
import ReactDOM from 'react-dom'

type componentType = React.ReactElement<any> | null;
type hocType = (component: (props: any) => componentType) => componentType;
const hoc = (WrappedComponent: any): any => {
    return class extends React.PureComponent<any, {}> {
        constructor(props: any) {
            super(props);
        }
        componentDidUpdate() {
            (ReactDOM.findDOMNode(this) as Element).scrollTop = 10000;
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}
export default hoc