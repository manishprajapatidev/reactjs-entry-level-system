import React from 'react';
import { BrowserRouter , Route, Link } from 'react-router-dom';
import Layout from './components/containers/Layout';

/** Load all Components such as Login, Register, Static Pages etc */
import Home from './views/Home';

import './App.css';

function App() {

  return (
      <BrowserRouter>
        <Layout>
            <Route path="/"  />
        </Layout>
      </BrowserRouter>
  );
}
 
export default App;
