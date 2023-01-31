import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <h1>React CRUD App</h1>
      <Routes>
        <Route exact path='/' element={<Create />}/>
        <Route exact path='/read' element={<Read />}/>
        <Route exact path='/update' element={<Update />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
