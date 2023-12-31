// App.js is the main component and parent of all subcomponents: NavBar, Home, CreateAccount, Login, Deposit, Withdraw, AllData.
// App.js imports and renders subcomponents in the DOM (it shows the subcomponent in the main part of the webpage when its NavBar link is clicked).
// App.js sets routes for the NavBar component using BrowserRouter, Routes, and Route from react-router-dom.
// Since the NavBar component is imported into App.js, it will be rendered in every page of the app.

// REACT -- React Router DOM components control the routing/navigation of the app
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Hooks
import { useState, createContext } from 'react';

// PAGES - Subcomponents are the "web pages" of the app
import { AllData }        from './components/AllData';
import { CreateAccount }  from './components/CreateAccount';
import { Home }           from './components/Home';
import { Login }          from './components/Login';
import { NavBar }         from './components/NavBar';
import { Resources }      from './components/Resources';
import { Transaction }    from './components/Transaction';
import { Transfer }       from './components/Transfer';

// Google OAuth2
import { useEffect }      from 'react';
import { gapi }           from 'gapi-script';

// STYLES
// Parent style           centers bootstrap content
import './App.css';
// My styles              modify bootstrap styles

//import './components/styles/day-mode.css';
import './components/styles/night-mode.css';

export const UserContext = createContext(null);
//export const baseUrl = "http://localhost:8080/api";           //<-- development mode
export const baseUrl = "https://bank-fs.onrender.com/api";   //<-- production mode

// What the App function does is it creates an array of users and a logged in user. It also creates functions to update the user array and the logged in user. It then renders the NavBar component and the Routes component. The NavBar component is rendered on every page; it needs to be placed inside BrowserRouter to work. The Routes component displays one selected subcomponent ("web page") at a time.
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);
  const clientId = "104078153668-4vekiv951u5juj09ijpsv061iefmi7s6.apps.googleusercontent.com";

  // OAuth2, gapi = Google API
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    };

    gapi.load('client', start);
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);
  
  // CRUD: CREATE (user)
  async function addUser(user) {
    /* setUsers([...users, user]); <-- FE only version */
    try {
      const response = await fetch(`${baseUrl}/create`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Sign up status: ", response.status);
      if (response.status === 400) {
        throw response;
      }
      const userData = await response.json();
      console.log(userData);
      setLoggedInUser(userData);
      return false;
    }
    catch (err) {
      if (err.status === 400) {
        const message = await err.json();
        console.log("Error: ", message);
        return message;
      }
    }
  }

  function logOut() {
    setLoggedInUser(null);
    localStorage.removeItem("user");
  }

    // CRUD: UPDATE (user)
    async function updateUser(user) {
      try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("Login status: ", response.status);
      if (response.status === 400) {
        throw response;
      }
      const userData = await response.json();
      console.log(userData);
      setLoggedInUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      return false;
      } 
      catch (err) {
        if (err.status === 400) {
          const message = await err.json();
          console.log("Error: ", message);
          return message;
        }
      }
    }

  // CRUD: UPDATE (user balance)
  function updateUserBalance(user) {
    const updatedUsers = users.map(u => {
      if (u.email === user.email) {
        return user;
      }
      return u;
    });
    setUsers(updatedUsers);
  }
// The NavBar subcomponent is rendered on every page; it needs to be placed inside BrowserRouter to work.
// Routes display one selected subcomponent ("web page") at a time.
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{users:[]}}>
          <NavBar loggedInUser = {loggedInUser} logOut = {logOut} />
          <br />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<CreateAccount addUser={addUser} setLoggedInUser={setLoggedInUser} />} />
            <Route path="/login" element={<Login updateUser={updateUser} users={users}/>} />
            <Route path="/transaction" element={<Transaction loggedInUser = {loggedInUser} setLoggedInUser ={setLoggedInUser} />} />
            <Route path="/transfer" element={<Transfer updateUser={updateUser} loggedInUser = {loggedInUser} setLoggedInUser = {setLoggedInUser} updateUserBalance={updateUserBalance} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/all-data" element={<AllData />} />
          </Routes>
          <br />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;


// DOCUMENTATION
// https://reactrouter.com/web/guides/primary-components
//   Primary Components: BrowserRouter, Routes, Route, Link
// https://reactrouter.com/web/api/BrowserRouter
//   BrowserRouter is the parent component of Routes and Route
// https://reactrouter.com/web/api/Routes
//   Routes is the parent component of Route
// https://reactrouter.com/web/api/Route

// Passed to subcomponents:
//   path               the URL path to match the name of the subcomponent; the path name is not case sensitive, should be lowercase and hyphenated, and does not include a trailing slash
//   element            the JSX component to render when the path matches

// Passed to elements in subcomponents:
//   loggedInUser       user object of the logged in user
//   users              array of user objects
//   updateUser         function to update the logged in user
//   addUser            function to add a new user to the users array
//   updateUserBalance  function to update the balance of a user in the users array