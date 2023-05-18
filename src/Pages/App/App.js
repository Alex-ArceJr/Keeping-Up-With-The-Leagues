
import './App.css';
import {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import {Routes, Route} from 'react-router-dom';
import BreweriesListDetailPage from '../BreweriesListDetailPage/BreweriesListDetailPage'
import BreweriesListPage from '../BreweriesListPage/BreweriesListPage';
import Main from '../Main/Main';
import OregonBreweriesList from '../OregonBreweriesList/OregonBreweriesList';
import OregonBreweriesDetailListPage from '../OregonBreweriesListDetailPage/OregonBreweriesListDetailPage';


function App() {

  const [user, setUser] = useState('dup')
  const [likes, setLikes] = useState([])


  return (
    <main className="App">
      {user ?
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/brewery' element={<BreweriesListPage/>}/>
          <Route path='/oregon' element={<OregonBreweriesList/>}/>
          <Route path='/brewery/:id' element={<BreweriesListDetailPage setLikes={setLikes} likes={likes}/>}/>
          <Route path='/oregon/:id' element={<OregonBreweriesDetailListPage setLikes={setLikes} likes={likes} />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }


    </main>
  );
}

export default App;
