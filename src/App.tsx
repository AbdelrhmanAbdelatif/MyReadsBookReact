import  React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/HomePage/Home';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';

function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
    
  );
}

export default App;
