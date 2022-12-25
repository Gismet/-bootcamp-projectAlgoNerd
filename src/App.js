import './index.css';
import './components/styles.css';
import Algorithms from "./components/Algorithms"
import { Route, Routes } from 'react-router-dom';
import BinarySearch from "./components/BinarySearch"
import Page from './Page';
import { Unfinished } from './unfinished';
import DataStructures from './components/DataStructs';
import ProblemSolving from './components/ProblemSolving';
import { useEffect, useState } from 'react';
import LoadingPage from './components/LoadingPage';
import LoginForm from './components/loginForm';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, []);

  return (
    isLoading ? <LoadingPage /> :
      <div className="App">
        {isLoggedIn === false ? <LoginForm clicker={setIsLoggedIn} /> :
          <Routes>
            <Route path='/' element={<Page />}></Route>
            <Route path='/algorithms' element={<Algorithms />}></Route>
            <Route path='/algorithms/binarysearch' element={<BinarySearch />} ></Route>
            <Route path='/algorithms/unfinished' element={<Unfinished />}></Route>
            <Route path='/datastructures' element={<DataStructures />}></Route>
            <Route path='/datastructures/unfinished' element={<Unfinished />}></Route>
            <Route path='/problem-solving-techniques' element={<ProblemSolving />}></Route>
            <Route path='/problem-solving-techniques/unfinished' element={<Unfinished />}></Route>
          </Routes>
        }
      </div>
  );

}

export default App;
