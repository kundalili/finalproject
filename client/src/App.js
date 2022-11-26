import './App.css'; 
import { AppContext } from './components/Context'
import Header from './components/Header';
import MidwifeList from './components/MidwifeList';
import Body from './components/Body';
import Footer from './components/Footer';
import DashboardMidwife from './components/Midwife/DashboardMidwife';
import Information from './components/Information';
// import ManageAccount from './components/ManageAccount';

function App() {

 
  return (
    <div className="App">
      <Header />      
      <Body />
      <Information />
      {/* <DashboardMidwife /> */}
      <Footer />

     

    </div>
  );
}

export default App;
