import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Home from './Homepage/Home';
import Navbar from './Navbar/Navbar';
import {Routes, Route, Outlet} from 'react-router-dom'
import InternetAccounts from './InternetAccounts/InternetAccounts';
import NetworkDiagrams from './NetworkDiagrams/NetworkDiagrams';
import AllSwitches from './AllSwitches/AllSwitches';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='internet-accounts' element={<InternetAccounts/>}>
            <Route path=':id' element={<InternetAccounts/>} />
          </Route>
          <Route path='diagrams' element={<NetworkDiagrams/>}>
            <Route path=':id' element={<NetworkDiagrams/>}/>
          </Route>
          <Route path='switches' element={<AllSwitches/>}>
            <Route path=':id' element={<AllSwitches/>}/>
          </Route>
      </Routes>
        <Outlet/>
      
    </div>
  );
}

export default App;
