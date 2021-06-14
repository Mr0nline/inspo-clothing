import { userActionValues } from './user.values';

const INITIAL_STATE = {
	currentUser: null,
};

//if state is undefinied than it'll be assigned as INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionValues.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
