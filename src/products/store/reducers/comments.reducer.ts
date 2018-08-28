import * as fromComments from '../actions/comments.action';
import { Comment } from "../../models/comment.model";
import {LOAD_COMMENTS} from "../actions/comments.action";

export interface CommentState {
  entities: { [id: string]: Comment };
  loading: boolean;
  loaded: boolean;
}

export const initialState: CommentState = {
  entities: {},
  loading: false,
  loaded: false,
};

export function reducer(
  state = initialState,
  action: fromComments.CommentsAction,
): CommentState {
  switch (action.type) {
    case fromComments.LOAD_COMMENTS: {
      return {
        ...state,
        loading: true,
      }
    }
  }
}

export const getCommentsEntities = (state: CommentState) => state.entities;
export const getCommentsLoading = (state: CommentState) => state.loading;
export const getCommentsLoaded = (state: CommentState) => state.loaded;
