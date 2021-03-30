import { combineReducers, createStore } from "redux";
import { Art, initialFeedback } from "./reducer";
import { createForms } from "react-redux-form";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			ART: Art,
			...createForms({
				feedbackForm: initialFeedback
			})
		})
	);

	return store;
};