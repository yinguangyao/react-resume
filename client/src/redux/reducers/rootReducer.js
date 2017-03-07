import { combineReducers } from 'redux'

const currentResume = (state="", action) => {
	switch(action.type) {
		case "SET_RESUME":
			return state + action.payLoad;
			break;
		default:
			return state;
	}
}

const currentStyle = (state="", action) => {
	switch(action.type) {
		case "SET_STYLE":
			return state + action.payLoad;
			break;
		default:
			return state;
	}
}

const isMarkdown = (state=false, action) => {
	switch(action.type) {
		case "SET_MARKDOWN":
			return action.payLoad;
			break;
		default:
			return state;
	}
}

export default combineReducers({
	currentResume,
	currentStyle,
	isMarkdown
})

