import { useState, useEffect } from 'react';
import './App.css'
import Header from './Header'
import MainArea from './MainArea';
import Footer from './Footer';
import MainAreaCard from './MainAreaCard.jsx';
import Menu from './Menu.jsx';
import About from './About.jsx';
import Modal from './Modal.jsx';




function App() {


  const [page, setPage] = useState('/');
  const [name, setName] = useState('please register');

  function onSubmit(name){  
    setName(name);
  }

  useEffect(
    () => {

      function handlePageLoad() {
        setPage(document.location.pathname);
      }

      handlePageLoad();

      window.addEventListener('popstate', handlePageLoad);
      return () => {
        window.removeEventListener('popstate', handlePageLoad);

      };
    },
    []
  )

  useEffect(() => {
    document.title = 'Soccer World';
  });



  return (

    <div className='page'>
      <Header setPage={setPage} />

      <Modal className="modal" onSubmit={onSubmit} />
       <p className='login'>hello, {name}</p>
      
      
      <Menu setPage={setPage} />
      <main className='main' id='main'>
        {(page === '/' || page === '/MainArea') && <MainArea />}
        {page === '/MainAreaCard' && <MainAreaCard />}
        {page === '/About' && <About />}
      </main>

      

      <Footer className='footer' />
    </div>

  );
}

export default App;
