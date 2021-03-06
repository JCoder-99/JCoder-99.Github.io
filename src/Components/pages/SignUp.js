import React from 'react';
import '../../App.css';

class SignUp extends React.Component{
constructor(){
super();
this.state = {
  username: '',
  email: '',
  password:'',
  error:'',
};
this.handleEmailChange = this.handleEmailChange.bind(this);
this.handlePassChange = this.handlePassChange.bind(this);
this.handleUserChange = this.handleUserChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.dismissError = this.dismissError.bind(this);
}
dismissError() {
  this.setState({ error: '' });
}

handleSubmit(evt) {
  evt.preventDefault();

  if (!this.state.username) {
    return this.setState({ error: 'Username is required' });
  }

  if (!this.state.password) {
    return this.setState({ error: 'Password is required' });
  }

  return this.setState({ error: '' });
}

handleEmailChange(evt){
  this.setState({
    email: evt.target.value,
  });
}
handleUserChange(evt) {
  this.setState({
    username: evt.target.value,
  });
};

handlePassChange(evt) {
  this.setState({
    password: evt.target.value,
  });
}

render() {
  return (
    <div 
    className="sign-up">
      <form onSubmit={this.handleSubmit}>
        {
          this.state.error &&
          <h3 data-test="error" onClick={this.dismissError}>
            <button onClick={this.dismissError}>✖</button>
            {this.state.error}
          </h3>
        }

        <label>Email</label>
        <input type="text" data-test="email" value={this.state.email} onChange={this.handleEmailChange}/>

        <label>Username</label>
        <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

        <label>Password</label>
        <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

        <input type="submit" value="Sign Up" data-test="submit" />
      </form>
    </div>
  );
}
}

export default SignUp;