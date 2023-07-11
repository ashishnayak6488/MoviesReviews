import Header from "./component/Header";
import Cards from "./component/Cards"
import AddMovie from "./component/AddMovie";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";
import { createContext, useContext, useState } from "react";
import Login from "./component/Login";
import SignUp from "./component/SignUp";

const Appstate = createContext();



function App() {

  const [login , setLogin] = useState(false)
  const [userName , setUserName] = useState("")

  return (
    <Appstate.Provider value={{login , userName , setLogin , setUserName}} >
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Appstate.Provider>  
  );
}

export default App;
export {Appstate}
