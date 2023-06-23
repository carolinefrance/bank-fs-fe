import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "104078153668-4vekiv951u5juj09ijpsv061iefmi7s6.apps.googleusercontent.com";

function LoginButton(props) {

  const onSuccess = (res) => {
    console.log('Login Success! Current user:', res.profileObj);
    props.handleSubmit({name: res.profileObj.givenName, email: res.profileObj.email, password: res.profileObj.googleId, isGoogle: true});
    //props.onClick(); // Call the onClick prop when the login is successful
  };

  const onFailure = (res) => {
    console.log('Login failed! res: ', res);
  };

  const buttonStyles = {
    backgroundColor: '#ffffff',
    color: '#000000',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    fontFamily: 'Avenir, sans-serif',
    letterSpacing: '0.2em',
    textDecoration: 'none',
    margin: '10px',
    width: 'auto',
  };
/* add styles to the button */
  return (
    <div id="logInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={props.buttonText}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginButton;