import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/index';

import Header from '../components/Header';
import RegisterForm from '../components/forms/RegisterForm';

class RegisterWrapper extends Component {
  constructor(props, context) {
    super(props, context);

    this.register = this.register.bind(this);
  }

  register(name, email, password) {
    this.props.dispatch(Actions.registerUser({ name, email, password }));
  }

  render() {
    return (
      <div className="login-container">
        <Header />
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <h1>Register</h1>
            <RegisterForm onSubmit={this.register} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.user,
  };
}

RegisterWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(RegisterWrapper);
