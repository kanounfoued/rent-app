const ROUTES: Record<string, BaseRoutes> = {
  HOME: '/',
  PROPERTY: 'property',
  MY_PROPERTY: 'my-property',
  CONTRACT: 'contract',
  MY_CONTRACT: 'my-contract',
  TRANSACTION: 'transaction',
  MY_TRANSACTION: 'my-transaction',
  USER: 'user',
  PROFILE: 'profile',
  SETTINGS: 'settings',
  LOGIN: 'login',
  SIGNUP: 'signup',
};

export type BaseRoutes =
  | '/'
  | 'property'
  | 'my-property'
  | 'contract'
  | 'my-contract'
  | 'transaction'
  | 'my-transaction'
  | 'user'
  | 'profile'
  | 'settings'
  | 'login'
  | 'signup';

export default ROUTES;
