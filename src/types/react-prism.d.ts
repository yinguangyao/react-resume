declare module 'react-prism' {
    import * as React from 'react'
    interface PrismCodeProps {
        children: string,
        className: string
    }
    export class PrismCode extends React.Component<PrismCodeProps> {
    }
}