
import './App.css';
import {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import {Routes, Route} from 'react-router-dom';
import GamesListDetailPage from '../GamesListDetailPage/GamesListDetailPage';
import GamesListPage from '../GamesListPage/GamesListPage';



function App() {

  const [user, setUser] = useState(null)


  return (
    <main className="App">
      {user ?
        <>
        <NavBar user={user}/>
        </>
        :
        <AuthPage setUser={setUser}/>
      }


    </main>
  );
}

export default App;
