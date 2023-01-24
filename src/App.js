
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Notes from './Component/Input/Notes';
import Navbar from './Component/Navbar';
import Bookmarks from './Component/Bookmark/Bookmark';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path='/' element={<Notes/>}>
       <Route path='/bookmarks' element={<Bookmarks/>}></Route>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
