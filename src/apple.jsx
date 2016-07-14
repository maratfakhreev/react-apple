import React from 'react';

export default class Apple extends React.Component {
  render() {
    const { className, ...rest } = this.props;
    const appleClass = className ? `apple-${className}` : 'apple';

    return (
      <div className={ appleClass } { ...this.rest }>
        { this.props.children }
      </div>
    );
  }
}
