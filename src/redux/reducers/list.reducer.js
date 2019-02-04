import listTypes from "../types/list.types";

const initState = {
  data: [],
  error: "",
  isFetching: false
};

export const list = (state = initState, action = {}) => {
  switch (action.type) {
    case listTypes.GET_LISTS:
      return { ...state, isFetching: true };
    case listTypes.GET_LISTS_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case listTypes.GET_LISTS_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    case listTypes.CHANGE_STATUS:
      return { ...state, isFetching: true };
    case listTypes.CHANGE_STATUS_SUCCESS:
      let data = [...state.data];
      data[action.i].isActive = !data[action.i].isActive;
      return { ...state, isFetching: false, data: [...data] };
    case listTypes.CHANGE_STATUS_FAIL:
      return { ...state, isFetching: false, error: action.payload };


    case listTypes.CREATE_ITEM:
      return { ...state, isFetching: true };
    case listTypes.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: [...state.data, action.payload]
      };
    case listTypes.CREATE_ITEM_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    case listTypes.CHANGE_NAME:
      return { ...state, isFetching: true };
    case listTypes.CHANGE_NAME_SUCCESS:
      let arr = [...state.data];
      arr[action.i].name = action.payload;
      return { ...state, isfetching: false, data: [...arr] };
    case listTypes.CHANGE_NAME_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    case listTypes.DELETE_ITEM:
      return { ...state, isFetching: true };
    case listTypes.DELETE_ITEM_SUCCESS:
      let newLists = [...state.data];
      newLists.splice(action.payload, 1);
      return { ...state, isFetching: false, data: newLists };
    case listTypes.DELETE_ITEM_FAIL:
      return { ...state, isFetching: false, error: action.payload };

    default:
      return state;
  }
};
