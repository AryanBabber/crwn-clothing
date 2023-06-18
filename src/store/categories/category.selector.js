import { createSelector } from "reselect";

const selectCategoryReducer = (s) => s.categories;

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
	categories.reduce((acc, { title, items }) => {
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
);

export const selectCategoriesIsLoading = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.isLoading);
