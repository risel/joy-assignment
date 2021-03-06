import {
	ActionInterface,
	FETCH_DATA,
	FETCH_DATA_CANCELLED,
	FETCH_DATA_FULFILLED,
	FETCH_DATA_REJECTED
} from 'actions'; 
import {
	ViewModel
} from 'models';
export type ModelState = {
	data?: ViewModel,
	error?: string, 
	isFetchingData?: boolean
}
export const dataFetchReducer = (
	state: ModelState = {
		data: [],
		error: "",
		isFetchingData: false 
	}, 
	action: ActionInterface 
) => {
	switch (action.type){
		case FETCH_DATA : 
			return {...state, isFetchingData: true};
		case FETCH_DATA_CANCELLED: 
			return {...state, isFetchingData: false};
		case FETCH_DATA_FULFILLED:
			return {error: "", data: action.payload, isFetchingData: false};
		case FETCH_DATA_REJECTED:
			return {...state, isFetchingData: false, error: action.payload};
		default:
			return state;
	}
}

