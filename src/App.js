import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper'
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <Search></Search>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
