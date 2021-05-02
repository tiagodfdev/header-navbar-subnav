import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNav from './components/HeaderNav'
import Logo from './components/Logo';
import Routes from './routes'
import { mainNavItens, subNavItens, urlLogo } from './commons/constants/headerConstants'

function App() {
  return (
    <div className="App">
      <Logo imageUrl={urlLogo} />
      <Router>
        <HeaderNav choiced={mainNavItens[1]} mainNavItems={mainNavItens} subNavItems={subNavItens}  />
        <Routes />
      </Router>
    </div>
  );
}
export default App;
