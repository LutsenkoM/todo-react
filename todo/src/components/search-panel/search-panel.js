import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  onSearchChange = (e) => {
    e.preventDefault();
    this.props.onSearchItem(this.state.label);
  };


  render() {
    return (
      <input type="text"
             className="form-control search-input"
             onChange={this.onSearchChange}
             placeholder="type to search" />
    );
  }
};

export default SearchPanel;
