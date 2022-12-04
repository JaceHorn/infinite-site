import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import contact from './contact';
import search from './search';
import result from './result';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='nav'>
          <Link to='/infinite-site'>Home</Link>
          <Link to='/infinite-site/account'>account</Link>
          <Link to='/infinite-site/FAQ'>FAQ</Link>
          <Link to='/infinite-site/contact'>contact</Link>
          <Link to='/infinite-site/search'>search</Link>
        </div>
        <Routes>
          <Route path='/infinite-site' element={<account/>}/>
          <Route path='/infinite-site/contact/:person'element={<contact />}/>
          <Route path='/infinite-site/search' element={<search/>}/>
            <Route path= ":query" element= {<result />} />
        </Routes>
      </BrowserRouter>
    </div>
      );
};

export default App;
