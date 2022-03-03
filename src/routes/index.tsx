import React from 'react';
import {
  BrowserRouter, Route, Routes as Switch
} from "react-router-dom";

// App
import App from '../App';
import Employee from '../pages/Employee';
// Pages
import CreateEmployee from '../pages/CreateEmployee';
import Main from '../pages/Main';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' element={<App />}>
          <Route index element={<Main />} />
          <Route path='employee' element={<CreateEmployee />} />
          <Route path='employee/:employeeId' element={<Employee />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;