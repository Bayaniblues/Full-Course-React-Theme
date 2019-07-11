import React from 'react';
import './App.css';
//Material Design Bootstrap 
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
//Components
import Navbar from './components/FullPageIntroWithFixedTransparentNavbar';
import ContentMenu from './components/Pills';
import Jumbotron from './components/JumbotronPage';
import Footer from './components/FooterPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Jumbotron/>
      <ContentMenu/>
      <Footer/>
    </div>
  );
}

export default App;
