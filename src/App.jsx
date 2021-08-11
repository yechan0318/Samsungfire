import LoginPage from './Pages/LoginPage';
import MainPage from './Pages/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    
      <Router>
        <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/LoginPage' component={LoginPage} />
        </Switch>
     </Router>
   
  );
}

export default App;
