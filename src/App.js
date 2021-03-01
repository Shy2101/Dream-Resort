import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#58687E", width:"100vw", height:"100vh", position:"fixed"}}>
      <div className="Sidebar">
         <Sidebar noOverlay noTransition/>
      </div>
      <div className="Header" style={{width:"95%", height:"100%", fontStyle: 'normal normal normal 20px/24px Roboto'}}>
         <Header noOverlay noTransition/>  
      </div>
    </div>
  );
}

export default App;