import logo from './logo.svg';
import './App.css';
import Mynav from './components/Mynav';
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2'
import Sec3 from './components/Sec3';
import Sec4 from './components/Sec4';
import Sec5 from './components/Sec5';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Mynav />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Footer />

    </div>
  );
}

export default App;
