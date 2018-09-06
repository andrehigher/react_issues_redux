import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { fetchIssuesIfNeeded, selectFilter } from '../actions';
import Filter from '../components/Filter';
import Issues from '../components/Issues';

class App extends Component {
  static propTypes = {
    selectedFilter: PropTypes.string,
    issues: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch, selectedFilter } = this.props;
    dispatch(fetchIssuesIfNeeded(selectedFilter));
  }

  handleChangeFilter = (e, {value}) => {
    const { dispatch } = this.props;
    dispatch(selectFilter(value));
    dispatch(fetchIssuesIfNeeded(value));
  }

  render() {
    const { selectedFilter, issues, isFetching } = this.props;

    if (isFetching) return <div className="app"><Icon loading name='spinner' /></div>;
    if (!issues.length) return <h2>Empty.</h2>;

    return (
      <div className="app">
        <Filter value={selectedFilter}
                onChange={this.handleChangeFilter} />
        <Issues issues={issues} />
      </div>
    )
  };
}

const mapStateToProps = state => {
  const { issuesFiltered, selectedFilter } = state;
  const {
    isFetching,
    items: issues
  } = issuesFiltered[selectedFilter] || {
    isFetching: true,
    items: []
  };

  return {
    selectedFilter,
    issues,
    isFetching,
  };
}

export default connect(mapStateToProps)(App);
