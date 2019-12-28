import { CoreFunction } from '../lib/Core';
import * as uuid from 'uuid';
import { User } from '../types';
import { Context } from '../context';
import Store from '../Store';

export interface Input {
  loginUserInput: LoginUserInput;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface Output {
  user: User;
  accessToken: string;
}

export const loginUser: CoreFunction<Context, Input, Output> = async (
  ctx,
  input
) => {
  const { email, password } = input.loginUserInput;

  const { user } = await Store.authenticateUser(ctx, { email, password });

  if (!user) {
    throw new Error('incorrect username or password');
  }

  return {
    user,
    accessToken: 'asdf'
  };
};