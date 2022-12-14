import './App.css'; 
import Header from './components/NavigationBar/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Information from './components/Information';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Body />
      <Information />
      <Footer /> 
    </div>
  );
}

export default App;
