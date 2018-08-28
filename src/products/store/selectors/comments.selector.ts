import { createSelector} from "@ngrx/store";

import * as fromComments from '../reducers/comments.reducer';
import * as fromFeature from '../reducers';

export const getCommentState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.comments,
);

export const getCommentsEntities = createSelector(
  getCommentState,
  fromComments.getCommentsEntities
);

export const getCommentsLoading = createSelector(
  getCommentState,
  fromComments.getCommentsLoading,
);

export const getCommentsLoaded = createSelector(
  getCommentState,
  fromComments.getCommentsLoaded,
);
