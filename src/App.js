import "./App.css";
import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Register from "./Register";
import Login from "./Login";
import Myprofile from "./Myprofile";

export const store = createContext();

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/myprofile" element={<Myprofile />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
