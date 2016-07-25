import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/index';
import _ from 'lodash';

import Header from '../components/Header';
import RegisterForm from '../components/forms/RegisterForm';

class RegisterWrapper extends Component {
  constructor(props, context) {
    super(props, context);

    this.register = this.register.bind(this);
  }
  register(props) {
    return new Promise((resolve, reject) => {
      this.props.dispatch(Actions.registerUser(props, (res) => {
        if (res.errors) {
          const errors = {
            _error: res.errors.base || 'Registration failed.',
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
    return (<div>
      <Header />
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <h1>Register</h1>
          <RegisterForm onSubmit={this.register} />
        </div>
      </div>
    </div>);
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

RegisterWrapper.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(RegisterWrapper);
