import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Utils/style-page/index.css';
import Home from './pages/Home/Home-index';
// import Accomodation from './pages/Accomodation-Sheet/Accomodation-index';
import Header from './components/Header/Header';
import About from './pages/About/About-index';
import Error from './pages/Error/Error-index';
import Footer from './components/Footer/Footer-index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
              <div className="global_style">
                <Header />
                <Routes>
                <Route path="/" element={<Home />} />  
                  {/* <Route path="/accomodation" element={<Accomodation />} /> */}
                  <Route path ="/about" element={<About />} />
                  <Route path = "*" element={<Error />} />
                </Routes>
                <Footer />
                {/* peut déplacer le footer hors du globalstyle et lui mettre 
                son propre style pour qu'il se positionne en bas de page et remplisse
                la largeur */}
              </div>
              {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
  // document.getElementById('root')
);