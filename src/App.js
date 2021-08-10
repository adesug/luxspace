import './assets/css/app.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePages from 'pages/HomePages';
import Details from 'pages/Details';
import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import Notfound from 'pages/Notfound';



function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
       <Route exact path="/" component={HomePages}/>
       <Route path="/categories/:idc" component={Details}/>
       <Route path="/cart" component={Cart}/>
       <Route path="/congratulation" component={Congratulation}/>
       <Route path="*" component={Notfound}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
