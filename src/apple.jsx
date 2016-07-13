import React from 'react';

export default class Apple extends React.Component {
  render() {
    return (
      <div className="apple" { ...this.props }>
        { this.props.children }
      </div>
    );
  }
}
