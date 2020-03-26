import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onSearchChange(term);

    // e.preventDefault();
    // this.props.onSearchItem(this.state.label);
  };

  render() {
    return (
      <input type="text"
             className="form-control search-input"
             onChange={this.onSearchChange}
             value={this.state.term}
             placeholder="type to search" />
    );
  }
};
