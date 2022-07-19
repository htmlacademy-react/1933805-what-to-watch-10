export enum AppRoute {
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Root = '/',
  Player = '/player/:id',
  NotFound = '*',
  SignIn = 'SignIn',
  Main = 'Main'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
