import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import { useState } from 'react';
import UseNavigateProfileComp from './pages/Profile(by instead useHistory)';
import UseNestedRoutePage from './pages/Profile-VERSION6-nestedRouetInPage';
// install "npm i react-router-dom"

export default function App() {
  const [login, setLogin] = useState(false);

  // *For refreshing when stepping to other page - not recommended !!
  //  ?<BrowserRouter forceRefresh

  // ** Confirm every time user goes to another route -> message/prompt/model
  //    **before stepping to other page by "getUserConfirmation"
  /* return (
    <BrowserRouter getUserConfirmation = {
      (message, callback) => {
        callback(window.confirm())
      }
    }

  }> */
  /* ***** */
  /* ***** */
  /*  </BrowserRouter>  */

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? 'log out' : 'login'}
        </button>

        {/*
        import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

        <Route path="login" element={user ? <Navigate to="/"/> : <Login />} />     If user is logged in, then redirect to home page, else go to login page }
        */}
        <Routes>
          {/* <Route path='/' element={<Home />} exact /> */}
          <Route path='/*' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/****<Route path='/profile' element={<Profile />} /> ****/}

          {/* *Note : by implement below - this is for access the "profile" page 
                which it has become a protected route for our app */}
          {/******* <Route
                  path='/profile'
                  element={login ? <Profile /> : <Navigate to='/' />}
          /> *****/}

          {/* Note : here we do "profile" protect login (as above)
                by implement useHistory() hook
              ==> here we send the "login" as a parameter */}
          {/* *****<Route
                    path='/profile'
                    element={<UseNavigateProfileComp login={login} />}
          /> ******/}

          {/* Note : below - for Nested Routing "Profile" component */}
          <Route
            path='/profile/*'
            element={<UseNestedRoutePage login={login} />}
          />

          {/* below : for posting with parameter - fetch "id" from URL */}
          <Route path='/post/:id' element={<Post />} />
          {/*  below : routing page "NotFound" when not declare as above*/}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
