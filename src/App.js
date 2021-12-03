import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from "./componant/Navbar";
import Aboutus from "./componant/Aboutus";
import Home from "./componant/Home";
import ME from "./componant/ME";
import pp from './componant/pp.jpg';


function App() {
  return (
    
    <div className="App">
    
      <BrowserRouter>
      <div className='ii'>
      <Navbar/>
      </div>
      <br/>
      <div className='zz'>
      <Route path="/" component={Home}/>
      <Route path="/Aboutus" component={Aboutus}/>
      <Route path="/ME" component={ME}/>
     </div>
      </BrowserRouter>
    </div>
    
  );
  
}

export default App;
