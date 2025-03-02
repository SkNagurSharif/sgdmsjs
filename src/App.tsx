import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modules/pages/Home';
import About from './modules/pages/About';
import Features from './modules/pages/Features';
import Contact from './modules/pages/Contact';
import Fpass from './modules/content/auth/fpass';
import AIDriven from './modules/pages/AIDriven';
import Financial from './modules/pages/Financial';
import Logistics from './modules/pages/Logistics';
import Sustainable from './modules/pages/Sustainable';
import Navbar from './components/Navbar';
import CreateAccount from './modules/content/auth/account';
import SignIn from './modules/content/auth/SignIn';
import ForgotMail from './modules/content/auth/fmail';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fpass" element={<Fpass />} />
        <Route path="/aidriven" element={<AIDriven />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/sustainable" element={<Sustainable />} />

        <Route path="/account" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-mail" element={<ForgotMail />} /> 
      </Routes>
    </Router>
  );
};

export default App;
