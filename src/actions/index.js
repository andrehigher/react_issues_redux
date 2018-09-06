export const REQUEST_ISSUES = 'REQUEST_ISSUES';
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
export const SELECT_FILTER = 'SELECT_FILTER';

export const selectFilter = filter => ({
  type: SELECT_FILTER,
  filter
});

export const requestIssues = state => ({
  type: REQUEST_ISSUES,
  state
});

export const receiveIssues = (state, json) => ({
  type: RECEIVE_ISSUES,
  state,
  issues: json,
});

export const fetchIssues = state => dispatch => {
  dispatch(requestIssues(state))
  return fetch(`https://api.github.com/repos/facebook/react/issues?state=${state}`)
    .then(response => response.json())
    .then(json => dispatch(receiveIssues(state, json)));
};

export const fetchIssuesIfNeeded = state => (dispatch, getState) => {
  return dispatch(fetchIssues(state));
};
