import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  TOGGLE_ALL_ITEMS,
  EDIT_ITEM,
  SET_ACTIVE_FILTER,
  DELETE_COMPLETED_ITEMS
} from "../constants/actionsType";

export const addNewItemAction = value => ({
  type: ADD_NEW_ITEM,
  payload: value
});

export const deleteItemAction = value => ({
  type: DELETE_ITEM,
  payload: value
});

export const toggleItemAction = value => ({
  type: TOGGLE_ITEM,
  payload: value
});

export const toggleAllItemsAction = value => ({
  type: TOGGLE_ALL_ITEMS,
  payload: value
});

export const editItemAction = (id, text) => ({
  type: EDIT_ITEM,
  payload: { id, text }
});

export const setActiveFilterAction = value => ({
  type: SET_ACTIVE_FILTER,
  payload: value
});

export const deleteCompletedItemsAction = () => ({
  type: DELETE_COMPLETED_ITEMS
});
