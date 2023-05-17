export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";

export const setSearchText = (searchText: string) => {
    return {
        type: SET_SEARCH_TEXT,
        payload: searchText,
    };
};

export interface SetSearchTextAction {
    type: typeof SET_SEARCH_TEXT;
    payload: string;
}

export type SearchActionTypes = SetSearchTextAction;