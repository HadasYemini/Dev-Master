import { Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import Navbar from './components/Navbar';
import VideoPage from './views/VideoPage';

function App() {
  return (
    <LanguageProvider>
        <Navbar />
        <div className="flex mt-16 justify-center items-center">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='video-page' element={<VideoPage />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
