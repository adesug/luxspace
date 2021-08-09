import './assets/css/app.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import HomePages from 'pages/HomePages';


function App() {
  return (
    <div className="App">
     <Router>
       <Route path="/" component={HomePages}/>
     </Router>
    </div>
  );
}

export default App;
