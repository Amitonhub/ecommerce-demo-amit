import { SET_SEARCH_TEXT, SearchActionTypes } from "../actions/SearchAction";

interface SearchState {
    searchText: string;
}

const initialState: SearchState = {
    searchText: "",
};

const searchReducer = (state: SearchState = initialState, action: SearchActionTypes) => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };
        default:
            return state;
    }
};

export default searchReducer;
