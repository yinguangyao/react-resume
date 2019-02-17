export interface store {
    styleText: string,
    resumeText: string,
    isMarkDown: boolean,
    addStyleText(styleChar: string): void,
    addResumeText(styleChar: string): void,
    changeMarkDownStatus(status: boolean): void
}