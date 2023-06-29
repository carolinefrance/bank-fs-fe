// CURRENT Login.js
// PURPOSE: After a user has created an account, they log in here.
// ARCHITECTURE:  The Login subcomponent is a child of App. It is rendered in the main area of App.js when the user navigates to the /login path.
// FUNCTIONALITY: The user enters their email and password. If the email and password match an existing account, the user is logged in and navigated to the home page. If the email and password do not match an existing account, the user is navigated to the create account page.

// IMPORTS
//            REACT
import React, { useState }    from 'react';
import { useNavigate }        from 'react-router-dom';
//import { useHistory }       from 'react-router-dom';
//            DESIGN: STYLE + BOOTSTRAP COMPONENTS
import { Card }               from 'react-bootstrap';
import Form                   from "react-bootstrap/Form";
//import { GoogleLogin }      from 'react-google-login';
import LoginButton            from './LoginButton'; // Import the LoginButton component
//import "./styles/day-mode.css";
import "./styles/night-mode.css";

// COMPONENT  Login
// PURPOSE    Renders the login form.
//            - Validates the user's email and password.
//            - If either field is empty, the user is prompted to enter a value.
//            - If both fields are filled, the user is logged in.
export function Login({updateUser, users}) {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /*
  const history = useHistory();
  const handleGoogleLogin = () => {
    // Perform the login with Google logic here

    // Assuming the login is successful, navigate to the Transaction.js component
    history.push("/transaction");
  };
  */

  // FUNCTION: validate
  // PURPOSE:
  //    - Validates the user's email and password.
  //    - If either field is empty, the user is prompted with an error message to enter a value.
  //    - If both fields are filled, the user is logged in.
  function validate(field, label) {
    console.log("Success: validate function called");
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 4000);
      return false;
    }
    return true;
  }

  function afterLoginSuccess() {
    navigate("/transaction"); 
  }
  // FUNCTION: handleLogin
  // PURPOSE:  Validates the user's email and password. If either field is empty, the user is prompted to enter a value. It finds the user from the users array. If the user is found, the user is logged in and navigated to the home page. If the user is not found, the user is navigated to the create account page.
  async function handleLogin() {
    console.log("Success: handleLogin function called");
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    const error = await updateUser({ email, password });
    if (error) {
      console.log("Login component: ", error);
      setStatus(error.message);
    }
    else {
      navigate("/transaction");
    }
  }

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
    <Card className="card">
    <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/image-bank2.jpeg`} alt="card image cap" />
      <Card.Body>
        <Card.Title>Please Log In</Card.Title>
          <>
          <Form className="d-flex flex-column align-items-center">
            <br/>
            Email address
            <br />
            <input type="input" className="form-control custom-input-blue" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/><br />

            Password
            <br />
            <input type="password" className="form-control custom-input-blue" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/><br />
            <br />
            {status && <p>{status}</p>}
            
            <div className="d-flex justify-content-between">
              
              <LoginButton buttonText="Login with Google" handleSubmit={updateUser} onClick={handleLogin} afterSuccess={afterLoginSuccess}/>
            </div>
            </Form>
          </>
      </Card.Body>
    </Card>
    </div>
  );
}
// for LoginButton, after the user clicks the button, I want to navigate("/transaction");
/* Deleted because handleLogin is now in LoginButton.js
<button type="submit" className="btn btn-light"
onClick={handleLogin}>
Login with my email
</button>
*/