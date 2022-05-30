import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutMePage from './pages/AboutMePage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  <div className="App">
      <Header/>
      <div style={{minHeight:"calc(100vh - 110px)"}}>
        <Switch>
          <Route path="/" exact >
          <HomePage/>
          </Route>
          <Route path="/about" exact >
          <AboutMePage/>
          </Route>
          <Route path="/gallery">
          <PhotoGalleryPage/>        
          </Route>
        </Switch>
      </div>
      <Footer/>
    </div>
    </BrowserRouter>

  );
}

export default App;
