import React from 'react';
import PropTypes from 'prop-types';
import Contents from "./Content"

class App extends React.Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
        <Contents body={children} />
    )
  }
}

export default App;
