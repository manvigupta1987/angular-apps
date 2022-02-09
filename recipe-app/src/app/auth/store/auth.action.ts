import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_START = '[Auth] Login Start'; // another way to give name to the action. 
export const LOGIN_FAIL = '[Auth] Login Fail';
export class Login implements Action {
 readonly type =  LOGIN;
 constructor(public payload : {email: string, userId: string, token: string, expirationDate: Date }) {}

}
export class Logout implements Action {
  readonly type = LOGOUT;
}

export class loginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {email:string; password: string}) {}
}

export class loginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload:string) {}
}

export type AuthActions = Login | Logout | loginStart | loginFail ;