import { GoogleLogout } from 'react-google-login';

const clientId = "104078153668-4vekiv951u5juj09ijpsv061iefmi7s6.apps.googleusercontent.com";

function LogoutButton(props) {
    
        const onSuccess = () => {
            alert('Logged out successfully');
            console.log('Logged out successfully');
            props.logOut();
        };
    
        return (
            <div id="logOutButton">
                <GoogleLogout
                    clientId={clientId}
                    buttonText={`${props.loggedInUser.name} | Logout`}
                    onLogoutSuccess={onSuccess}
                />
            </div>
        )
    }

export default LogoutButton;