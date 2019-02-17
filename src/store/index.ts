import {
    observable,
    action
} from 'mobx'
import {
    store
} from '../share/interface'

class Store implements store {
    @observable styleText: string = ''
    @observable resumeText: string = ''
    @observable isMarkDown: boolean = false

    @action
    addStyleText = (styleChar: string): void => {
        this.styleText += styleChar;
    }
    @action
    addResumeText = (resumeChar: string): void => {
        this.resumeText += resumeChar;
    }
    @action
    changeMarkDownStatus = (status: boolean): void => {
        this.isMarkDown = status;
    }
}
export default new Store();