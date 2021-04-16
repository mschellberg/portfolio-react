import Nav from '../components/nav';
import About from '../components/about';
import Footer from '../components/footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
      <About />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
