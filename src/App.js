import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/privacy_policy'} element={<PrivacyPolicy/>}/>
      </Routes>
    </div>
  );
}

export default App;
