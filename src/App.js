import logo from './GAVS.jpg';
import './App.css';
import { BrowserRouter as Router,Routes,Link, Route } from 'react-router-dom';
import Engineer from './components/Engineer';
import Project from './components/Project';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200px" height="150px"/>
        <h1 style={{color:'black'}} >WELCOME TO  PROJECT INFORMATION</h1>
        <Link to="/Engineer"><button >Engineer</button> </Link><br></br>
        <Link to="/Project"><button>Project</button></Link>

      </header>
     <Routes>
       <Route exact path='/Engineer' element={<Engineer/>}></Route>
 
    </Routes>
    <Routes>
    <Route exact path='/Project' element={<Project/>}></Route>
    </Routes>
    </div>

    </Router>

  );

}

export default App