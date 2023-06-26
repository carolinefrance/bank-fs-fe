import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate }        from 'react-router-dom';

const clientId = "104078153668-4vekiv951u5juj09ijpsv061iefmi7s6.apps.googleusercontent.com";

function LoginButton(props) {
  const navigate = useNavigate(); 
  const onSuccess = async (res) => {
    console.log('Login Success! Current user:', res.profileObj);
    await props.handleSubmit({name: res.profileObj.givenName, email: res.profileObj.email, password: res.profileObj.googleId, isGoogle: true});
    navigate("/transaction");
    //props.onClick(); // Call the onClick prop when the login is successful
  };

  const onFailure = (res) => {
    console.log('Login failed! res: ', res);
  };

  return (
    <div id="logInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={props.buttonText}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        className="custom-google-login-button"
      />
    <button type="button" className="btn btn-light" onClick={props.onClick}>
      Login with my email
    </button>
    </div>
  );
}

export default LoginButton;