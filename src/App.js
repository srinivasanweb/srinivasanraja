import Navbar from './components/navbar';
import About from './components/about';
import Home from './components/home';
import Skills from './components/skills';
import Timeline from './components/timeline';
import Contact from './components/conatct';

function App() {
  return (
    <div id="colorlib-page">
		<div className="container-wrap">
    <Navbar/>
    <div id="colorlib-main">
					<Home/>
          <About/>
          <Skills/>
          <Timeline/>
          <Contact/>
    </div>
    </div>
    </div>
  );
}

export default App;
