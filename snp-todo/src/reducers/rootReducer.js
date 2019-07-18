import { initialState } from "../store/initialState";
import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  TOGGLE_ALL_ITEMS,
  EDIT_ITEM,
  SET_ACTIVE_FILTER,
  DELETE_COMPLETED_ITEMS
} from "../constants/actionsType";

export const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NEW_ITEM: {
      const newList = [...state.itemsList, payload];
      localStorage.setItem("list", JSON.stringify(newList));
      return { ...state, itemsList: newList };
    }
    case DELETE_ITEM: {
      const newList = state.itemsList.filter(v => v.id !== payload);
      localStorage.setItem("list", JSON.stringify(newList));
      return { ...state, itemsList: newList };
    }
    case TOGGLE_ITEM: {
      let newList = [...state.itemsList];
      for (let key in newList) {
        if (newList[key].id === payload) {
          newList[key].completed = !newList[key].completed;
          break;
        }
      }
      localStorage.setItem("list", JSON.stringify(newList));
      return { ...state, itemsList: newList };
    }
    case TOGGLE_ALL_ITEMS: {
      let newList = [...state.itemsList];
      for (let key in newList) {
        newList[key].completed = payload;
      }
      localStorage.setItem("list", JSON.stringify(newList));
      return { ...state, itemsList: newList };
    }
    case EDIT_ITEM: {
      let newList = [...state.itemsList];
      for (let key in newList) {
        if (newList[key].id === payload.id) {
          newList[key].text = payload.text;
          break;
        }
      }
      localStorage.setItem("list", JSON.stringify(newList));
      return { ...state, itemsList: newList };
    }
    case SET_ACTIVE_FILTER: {
      return { ...state, activeFilter: payload };
    }
    case DELETE_COMPLETED_ITEMS: {
      const newList = state.itemsList.filter(value => !value.completed);
      localStorage.setItem("list", JSON.stringify(newList));
      return { ...state, itemsList: newList };
    }
    default:
      return state;
  }
};
