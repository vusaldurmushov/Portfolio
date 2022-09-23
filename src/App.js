import './App.css'; 
import "aos/dist/aos.css"
import '../src/style/style.css'
import Contact from './component/contact/Contact';
import Experince from './component/experience/Experince';
import Home from './component/Home';
import About from './component/About/About';
import Portfolio from './component/portfolio/Portfolio';
import Header from './pages/Header';
import ScrollToTop from './component/ScrollToTop';

import "./style/style.scss"
import ProgressBar from './component/ProgressBar';

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <ProgressBar/>
      <Header/>
      <Home/>
      <About/>
      <Experince/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
