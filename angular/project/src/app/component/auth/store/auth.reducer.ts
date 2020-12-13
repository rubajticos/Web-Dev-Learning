import { NgModuleFactoryLoader } from '@angular/core';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
}

const initialState = {
  user: null,
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  console.log(state);
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );

      return {
        ...state,
        user: user,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

/*

1) Default case is absolutelty required because each state reducer is fired
when some action dispatched.
Reducer have to return current state in this situaction when not recognize action.

2)  Prefixes are helpful to provide unique action codes.

*/
