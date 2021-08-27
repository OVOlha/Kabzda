// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';







let App = () => {
  return (

    <div className='app-wrapper'>
      <Header />

      <Nav />

      <Profile/>


    </div>

  );
}



export default App;
