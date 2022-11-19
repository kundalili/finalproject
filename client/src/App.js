import './App.css'; 
import { InaContext } from './components/Context'
import Header from './components/Header';
import Registration from './components/Registration';
import MidwifeList from './components/MidwifeList';
import Home from './components/Home';
import Footer from './components/Footer';
// import ManageAccount from './components/ManageAccount';

function App() {

 
  return (
    <div className="App">
      <Header />      
      <Home />
      <Registration />
      <Footer />
     

    </div>
  );
}

export default App;
