import * as React from 'react'
import {
    inject,
    observer
} from 'mobx-react'
import Prism from "prismjs";

import {
    store as IStore
} from '../share/interface'
import store from '../store'
import Resume from './ReactResume'
import StyleSheet from './StyleSheet'
import {
    resumeContent,
    styleContent
} from '../assets/data'

// @inject(({store}: {store: IStore}) => {
//     return {
//         styleText: store.styleText,
//         resumeText: store.resumeText,
//         isMarkDown: store.isMarkDown,
//         addStyleText: store.addStyleText,
//         addResumeText: store.addResumeText,
//         changeMarkDownStatus: store.changeMarkDownStatus
//     }
// })
class Container extends React.Component<any, {}> {
    time: number = 50;
    constructor(props: IStore) {
        super(props);
    }
    componentDidMount() {
        this.start();
    }
    showStyleContent(index: number) {
        const currentStyle  = styleContent[index],
            curStyleLen = currentStyle && currentStyle.length;
        if (!currentStyle) {
            return;
        }
        return new Promise((resolve) => {
            let i = 0;
            const interval = setInterval(() => {
                if (i <= curStyleLen-1) {
                    store.addStyleText(currentStyle[i]);
                    this.forceUpdate();
                    i++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, this.time)
        })
    }
    showResumeContent() {
        const resumeLen = resumeContent.length;
        return new Promise((resolve) => {
            let i = 0;
            const interval = setInterval(() => {
                if (i <= resumeLen-1) {
                    store.addResumeText(resumeContent[i]);
                    i++;
                } else {
                    resolve();
                    clearInterval(interval);
                }
            }, this.time)
        })
    }
    showHtml() {
        store.changeMarkDownStatus(true);
    }
    async start() {
        try {
            await this.showStyleContent(0)
            await this.showResumeContent()
            await this.showStyleContent(1)
            this.showHtml()
            await this.showStyleContent(2)
        } catch (err) {
            console.log(err);
        }
    }
    componentWillReact() {
        console.log('this is update')
    }
    render() {
        const { styleText, resumeText, isMarkDown } = store;
		return (
			<div>
				<StyleSheet styleText={styleText}/>
				<Resume 
					isMarkDown={isMarkDown}
					resumeText={resumeText}
				/>
				<style>{styleText}</style>
			</div>
		)
    }
}
export default Container