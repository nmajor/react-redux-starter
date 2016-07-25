import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Loading from '../Loading';

class LoginForm extends Component { // eslint-disable-line react/prefer-stateless-function
  renderSubmitting() {
    if (this.props.submitting) {
      return <span className="outside-button-loading"><Loading /></span>;
    }
  }
  renderErrorClass(field) {
    if (field.touched && field.error) {
      return 'has-error';
    }
  }
  renderError(field) {
    if (field.touched && field.error) {
      return <span className="help-block">{field.error}</span>;
    }
  }
  render() {
    const {
      fields: {
        email,
        password,
      },
      error,
      handleSubmit,
    } = this.props;

    return (<form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <div className={`form-group ${this.renderErrorClass(email)}`}>
            <label className="control-label">Email</label>
            <input type="text" className="form-control" {...email} />
            {this.renderError(email)}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className={`form-group ${this.renderErrorClass(password)}`}>
            <label className="control-label">Password</label>
            <input type="password" className="form-control" {...password} />
            {this.renderError(password)}
          </div>
        </div>
      </div>
      <div className="form-group">
        {error && <div className="text-danger">{error}</div>}
        <button className="btn btn-success btn-block blah" type="submit">Submit {this.renderSubmitting()}</button>
      </div>
    </form>);
  }
}

LoginForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

LoginForm = reduxForm({ // eslint-disable-line no-class-assign
  form: 'login',
  fields: [
    'email',
    'password',
  ],
})(LoginForm);

export default LoginForm;

//
// import React, { Component, PropTypes } from 'react';
//
// class LoginForm extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.loginUser = this.loginUser.bind(this);
//   }
//
//   loginUser(e) {
//     e.preventDefault();
//
//     const emailRef = this.refs.email;
//     const passwordRef = this.refs.password;
//     if (emailRef.value && passwordRef.value) {
//       this.props.loginUser(emailRef.value, passwordRef.value);
//     }
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//   }
//   renderForm() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         {this.renderEmailFormGroup()}
//         {this.renderPasswordFormGroup()}
//         {this.renderErrors('base')}
//         <button className="btn btn-success btn-block" onClick={this.loginUser}>Login</button>
//       </form>
//     );
//   }
//   renderEmailFormGroup() {
//     return (
//       <div className="form-group">
//         <label htmlFor="login-email">Email</label>
//           <div className="input-group">
//             <span className="input-group-addon">@</span>
//             <input
//               ref="email"
//               id="login-email"
//               className="form-control"
//               type="text"
//               placeholder="john@example.com"
//             />
//           </div>
//       </div>
//     );
//   }
//   renderPasswordFormGroup() {
//     return (
//       <div className="form-group">
//         <label htmlFor="login-password">Password</label>
//         <input
//           ref="password"
//           className="form-control"
//           type="password"
//           id="login-password"
//         />
//       </div>
//     );
//   }
//   renderErrors(type) {
//     if (this.props.errors) {
//       return this.props.errors[type].map((error, index) => {
//         return <p key={index} className="text-danger">{error}</p>;
//       });
//     }
//   }
//   render() {
//     return (
//       <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
//         <h1>Login</h1>
//         {this.renderForm()}
//       </div>
//     );
//   }
// }
//
// LoginForm.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   errors: PropTypes.object,
// };
//
// export default LoginForm;
