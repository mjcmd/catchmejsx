import './App.css';
// import 'antd/dist/antd.css';
import StartPage from './components/StartPage';
import Catchme from './components/Catchme';

import Info from './components/Info';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    // style={{backgroundColor:"blue", height: "100%"}}
    <div className="catchme"  >
      {/* <Info /> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage/>} />
          <Route path="/catchme" element={<Catchme />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
