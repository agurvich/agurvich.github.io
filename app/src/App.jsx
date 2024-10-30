import './App.css'

import { UserDataProvider } from './contexts/user-data-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';

import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects/projects';
import NavBar from './components/navbar';
import Presentations from './components/presentations/presentations';
import Footer from './components/footer';
import Contact from './components/contact';

function App() {
  return (
    <UserDataProvider>

    <Router>
      <div className="App w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <Element name="home"><Hero /></Element>
              <Element name="about"><About /></Element>
              <Element name="projects"><Projects /></Element>
              <Element name="presentations"><Presentations /></Element>
              <Element name="contact"><Contact /></Element>
            </>
          } />
        </Routes>
      </div>
    </Router>
    </UserDataProvider>
  );
}

export default App;