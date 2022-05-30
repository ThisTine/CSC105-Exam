import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AboutMePage from './pages/AboutMePage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [page,setpage] = useState("home")
  return (
    <div className="App">
      <Header setpage={setpage}/>
      <div style={{minHeight:"calc(100vh - 110px)"}}>
      {page === "home" && <HomePage/>}
      {page === "about" && <AboutMePage/>}
      {page === "gallery" && <PhotoGalleryPage/>}
      </div>
      <Footer setpage={setpage}/>
    </div>
  );
}

export default App;
