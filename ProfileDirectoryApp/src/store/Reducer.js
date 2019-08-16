import { FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, CLEAR_USERS } from './Types';

/**
 * *****************************************
 * 
 * Reducer
 * 
 * *****************************************
 */

const InitialState = {
  users: [],

  serverError: null
};

export default function RootReducer(state = InitialState, action) {
  switch(action.type) {

    /**
     * @TODO Task #2 Implement Redux
     */

    /**
     * Your code begins here ...
     */
    case FETCH_USERS_SUCCESS:
      return {
        users: action.users,
        serverError: null
      };   // replace
    case FETCH_USERS_ERROR:
      return {
        users: [],
        serverError: action.error
      };   // replace
    case CLEAR_USERS:
      return InitialState;   // replace

    // ...
     
    /**
     * Your code ends here ...
     */

    default:
      return state;
  };
};