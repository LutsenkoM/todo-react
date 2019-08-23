import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {
  // constructor() {
  //   super();
  //   // this.onLabelClick = () => {
  //   //   console.log(`Done: ${this.props.label}`);
  //   // }
  //   //
  //   // this.state = {
  //   //   done: false
  //   // };
  //
  // }

  state = {
    done: false,
    important: false
  };

  onLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      }
    });
  }

  onImportantClick = () => {
    this.setState((state) => {
      return {
        important: !state.important
      }
    });
  }

  render () {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let classNames = 'todo-list-item';
    if ( done ) {
      classNames += ' done';
    }

    if ( important ) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
      <span
        className="todo-list-item-label"
        onClick={ this.onLabelClick }>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={ this.onImportantClick }
      >
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" onClick={ onDeleted } />
      </button>
    </span>
    );
  }

}

