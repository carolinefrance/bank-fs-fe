import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "104078153668-4vekiv951u5juj09ijpsv061iefmi7s6.apps.googleusercontent.com";

function LogoutButton(props) {
    const navigate = useNavigate();
    const onSuccess = () => {
        alert('Logged out successfully');
        console.log('Logged out successfully');
        props.logOut();
        navigate('/'); // Navigate to the home page or any desired page
      };
      
    return (
        <div id="logOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={`${props.loggedInUser.name} | Logout`}
                onLogoutSuccess={onSuccess}
                className="custom-google-logout-button"
            />
        </div>
    )
}

export default LogoutButton;