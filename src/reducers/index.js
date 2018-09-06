import { combineReducers } from 'redux';
import {
  REQUEST_ISSUES, 
  RECEIVE_ISSUES,
  SELECT_FILTER
} from '../actions';

const selectedFilter = (state = 'all', action) => {
  switch (action.type) {
    case SELECT_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const issues = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_ISSUES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_ISSUES:
      return {
        ...state,
        isFetching: false,
        items: action.issues,
      };
    default:
      return state;
  }
}

const issuesFiltered = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_ISSUES:
    case REQUEST_ISSUES:
      return {
        ...state,
        [action.state]: issues(state[action.state], action)
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  issuesFiltered,
  selectedFilter
})

export default rootReducer;
