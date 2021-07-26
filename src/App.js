import React  from 'react';
import { Switch,Link,Route} from 'react-router-dom';
import Sign from "./component/Sign";
import Login from "./component/Login";
import './App.css';

function App() {
  return (
   <>

      <div>
        <nav >
          
          
              <Link to="/" className="register">Register</Link>
         
              <Link to="/Login" className="login">Login</Link>
            
        </nav>  
        </div>
      
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
        
          <Route path="/">
            <Sign/>
          </Route>
        </Switch>
  

   </>
  );
}

export default App;
