import './App.css';
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
