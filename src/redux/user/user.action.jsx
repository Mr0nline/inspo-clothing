import { userActionValues } from './user.values';

export const setCurrentUser = (user) => ({
	type: userActionValues.SET_CURRENT_USER,
	payload: user,
});
