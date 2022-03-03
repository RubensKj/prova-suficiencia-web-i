import React from 'react';
import Header from './components/Header';
import { Outlet } from "react-router-dom";
import Global from './styles/global';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Global />
    </React.Fragment>
  );
}

export default App;
