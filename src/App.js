import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute';
import AddService from './Pages/AddService/AddService';
function App() {
  return (

    <AuthProvider>
       <Router>
      
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/addService">
            <AddService/>
          </PrivateRoute>
          <Route path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
        </Switch>
      
    </Router>
    </AuthProvider>
   
  );
}

export default App;
