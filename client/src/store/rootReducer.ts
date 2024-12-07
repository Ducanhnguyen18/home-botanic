import { combineReducers } from 'redux';

import registrationReducer from '../features/registration/registrationSlice';

const rootReducer = combineReducers({
    registration: registrationReducer,
});

export default rootReducer;
