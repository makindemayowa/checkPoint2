import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../documents/SearchBar';
import { searchDocuments } from '../../actions/documentActions';

export class SearchDocuments extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  onChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.searchDocuments(this.state.searchQuery);
  }

  clearField() {
    this.setState({
      searchQuery: ''
    });
  }
  render() {
    return (
      <span>
        <SearchBar
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          clearField={this.clearField}
        />
      </span>
    );
  }
}

SearchDocuments.propTypes = {
  searchDocuments: PropTypes.func.isRequired
};

export default connect(null, {
  searchDocuments
})(SearchDocuments);
