import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
// install "npm i react-router-dom"

export default function App() {
  return (
    /* <BrowserRouter basename='/tutorial'> */

    /*  <BrowserRouter forceRefresh> */
    /*       Note: this is for re-render*/

    /*  <BrowserRouter
      getUserConfirmation={(message, callback) => {
        callback(window.confirm());
      }}
    > */
    <BrowserRouter>
      <div className='App'>
        <Header />
      </div>
      <Routes>
        {/* <Route path='/' element={<Home />} exact /> */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
