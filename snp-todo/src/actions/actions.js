import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  TOGGLE_ALL_ITEMS,
  EDIT_ITEM,
  SET_ACTIVE_FILTER,
  DELETE_COMPLETED_ITEMS
} from "../constants/actionsType";

export const addNewItemAction = value => {
  return {
    type: ADD_NEW_ITEM,
    payload: value
  };
};

export const deleteItemAction = value => {
  return {
    type: DELETE_ITEM,
    payload: value
  };
};

export const toggleItemAction = value => {
  return {
    type: TOGGLE_ITEM,
    payload: value
  };
};

export const toggleAllItemsAction = value => {
  return {
    type: TOGGLE_ALL_ITEMS,
    payload: value
  };
};

export const editItemAction = (itemID, itemText) => {
  return {
    type: EDIT_ITEM,
    payload: {
      id: itemID,
      text: itemText
    }
  };
};

export const setActiveFilterAction = (value) => {
  return {
    type: SET_ACTIVE_FILTER,
    payload: value
  };
};

export const deleteCompletedItemsAction = () => {
  return {
    type: DELETE_COMPLETED_ITEMS
  };
};
