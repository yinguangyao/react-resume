import * as React from 'react'
import {
    inject,
    observer
} from 'mobx-react'

import {
    store as IStore
} from '../share/interface'
import Resume from './ReactResume'
import StyleSheet from './StyleSheet'
import {
    resumeContent,
    styleContent
} from '../assets/data'

@inject(({store}: {store: IStore}) => {
    return {
        styleText: store.styleText,
        resumeText: store.resumeText,
        isMarkDown: store.isMarkDown,
        addStyleText: store.addStyleText,
        addResumeText: store.addResumeText,
        changeMarkDownStatus: store.changeMarkDownStatus
    }
})
@observer
class Container extends React.Component<IStore, {}> {
    time: number = 100;
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
                if (i <= curStyleLen) {
                    this.props.addStyleText(currentStyle[i]);
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
                if (i <= resumeLen) {
                    this.props.addResumeText(resumeLen[i]);
                    i++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, this.time)
        })
    }
    showHtml() {
        this.props.changeMarkDownStatus(true);
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
    render() {
        const { styleText, resumeText, isMarkDown } = this.props;
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