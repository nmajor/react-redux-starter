import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(App);
