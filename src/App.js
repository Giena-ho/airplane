import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import CardAirplane from "./components/CardAirplane/cardAirplane";
import Heder from "./components/Header/Header";
import Main from "./components/pages/main/main";
import "./App.css";
import Su57 from "./components/pages/Su57/Su57";
import Su27 from "./components/pages/Su27/Su27";
import Mig35 from "./components/pages/Mig35/Mig35";
import Yk141 from "./components/pages/Yk141/Yk141";
import F35 from "./components/pages/F35/F35";
import Yk3 from "./components/pages/Yk3/Yk3";
import J20 from "./components/pages/J20/J20";
import Su47 from "./components/pages/Su47/Su47";

const App = () => {
  return (
    <BrowserRouter>
      {/* обёртка для роуты */}
      <div className="box">
        <div className="wrapper">
          <Heder />
          <Routes> 
            {/* кнопка */}
            <Route exact path="/airplane" element={<Main />} /> 
            {/* Exact - это возвращение на главную страницу*/}
            <Route path="/airplane/Su57" element={<Su57 />} />
            <Route path="/airplane/Su27" element={<Su27/>}/>
            <Route path="/airplane/Mig35" element={<Mig35/>}/>
            <Route path="/airplane/yk141" element={<Yk141/>}/>
            <Route path="/airplane/F35" element={<F35/>}/>
            <Route path="/airplane/Yk3" element={<Yk3/>}/>
            <Route path="/airplane/J20" element={<J20/>}/>
            <Route path="/airplane/Su47" element={<Su47 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
