
import './App.css';
import {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar';


function App() {

  const [user, setUser] = useState(null)


  return (
    <div className="App">
        <NavBar />
    </div>
  );
}

export default App;
