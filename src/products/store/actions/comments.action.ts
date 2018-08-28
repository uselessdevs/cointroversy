import { Action } from '@ngrx/store';

export const LOAD_COMMENTS = '[Comments] Load Comments';
export const LOAD_COMMENTS_SUCCESS = '[Comments] Load Comments Success';
export const LOAD_COMMENTS_FAIL = '[Comments] Load Comments Fail';

export class LoadComments implements Action {
  readonly type = LOAD_COMMENTS;
  constructor() {}
}

export class LoadCommentsSuccess implements Action {
  readonly type = LOAD_COMMENTS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadCommentsFail implements Action {
  readonly type = LOAD_COMMENTS_FAIL;
  constructor(public payload: any) {}
}

export type CommentsAction =
  LoadComments |
  LoadCommentsSuccess |
  LoadCommentsFail;
