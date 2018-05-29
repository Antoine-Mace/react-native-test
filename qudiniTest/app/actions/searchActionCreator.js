import {SEARCH_ACTION_SET} from "../actionTypes";

const searchAction = text => ({
  type: SEARCH_ACTION_SET,
  value: text
});

export {searchAction};