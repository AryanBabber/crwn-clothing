import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (s) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, s);
export const fetchCategoriesFailed = (e) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, e);
