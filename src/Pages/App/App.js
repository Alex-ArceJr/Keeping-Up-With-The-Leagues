
import './App.css';
import {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import {Routes, Route} from 'react-router-dom';
import BreweriesListDetailPage from '../BreweriesListDetailPage/BreweriesListDetailPage'
import BreweriesListPage from '../BreweriesListPage/BreweriesListPage';
import Main from '../Main/Main';


function App() {

  const [user, setUser] = useState('')


  return (
    <main className="App">
      {user ?
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/brewery' element={<BreweriesListPage/>}/>
          <Route path='/brewery/:id' element={<BreweriesListDetailPage />}/>
        </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }


    </main>
  );
}

export default App;
