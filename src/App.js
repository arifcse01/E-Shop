
import './App.css';
import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import AddProducts from './components/AddProducts/AddProducts';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import ManageProducts from './components/ManageProducts/ManageProducts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({}); 
   
  return (    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />       
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addProduct">
              <AddProducts></AddProducts>
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>        
      </Router>
    </UserContext.Provider>
  );
}

export default App;
