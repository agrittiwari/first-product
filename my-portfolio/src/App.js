
import './App.css';
import Home from "./Components/pages/Home";
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path='/' ><Home/></Route>
          <Route exact path='/login' ><Login/></Route>
          <Route exact path='/register' ><Register/></Route>
        
     </Switch>
    </div>
    </Router>
    
  );
}

export default App;
