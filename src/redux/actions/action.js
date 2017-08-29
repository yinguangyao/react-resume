export const setMarkdown = (bool) => {
	return {
		type: "SET_MARKDOWN",
		payLoad: bool
	}
}

export const setStyle = (char) => {
	debugger;
	return {
		type: "SET_STYLE",
		payLoad: char
	}
}

export const setResume = (char) => {
	return {
		type: "SET_RESUME",
		payLoad: char
	}
}