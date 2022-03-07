import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import generateStore from './core/_store/store';
import Activities from './features/Activities/page/Activities';
import MonthlyStats from './features/MonthlyStats/page/MonthlyStats';
import MonthDetails from './features/MonthlyStats/components/MonthDetails.components';


function  App(){
  const store = generateStore();
    return (
      <Provider store={store}>
        <Router>
          <Routes>
              <Route path="/" exact element={<Activities/>}>
              </Route>
              <Route path="/monthly" element={<MonthlyStats/>}>
              </Route>
              <Route path="/details" element={<MonthDetails/>}>
              </Route>
          </Routes>
      </Router>  
    </Provider>
    ) 
}

export default App;
