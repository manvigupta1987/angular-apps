import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_START = '[Auth] Login Start'; // another way to give name to the action.
export const LOGIN_FAIL = '[Auth] Login Fail';
export const SIGNUP_START = '[Auth] Sign up Start';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const AUTO_LOGOUT = '[Auth] Auto Logut';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}
export class Logout implements Action {
  readonly type = LOGOUT;
}

export class loginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class loginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: string) {}
}

export class SignUpStart implements Action {
  readonly type = SIGNUP_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class AutoLogout implements Action {
  readonly type = AUTO_LOGOUT;
}

export type AuthActions =
  | Login
  | Logout
  | loginStart
  | loginFail
  | SignUpStart
  | ClearError 
  | AutoLogout;
