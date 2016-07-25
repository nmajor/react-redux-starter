import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import Header from '../components/Header';
import LoginForm from '../components/forms/LoginForm';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/index';

class LoginWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.login = this.login.bind(this);
  }

  login(props) {
    return new Promise((resolve, reject) => {
      this.props.dispatch(Actions.loginUser(props, (res) => {
        if (res.errors) {
          const errors = {
            _error: res.errors.base || 'Login failed.',
          };

          _.forEach(res.errors, (val, key) => {
            errors[key] = val.message;
          });

          reject(errors);
        } else {
          resolve();
          this.context.router.push('/dashboard');
        }
      }));
    });
  }

  render() {
    return (
      <div className="login-container">
        <Header />
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <h1>Login</h1>
            <LoginForm onSubmit={this.login} />
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

LoginWrapper.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(LoginWrapper);
