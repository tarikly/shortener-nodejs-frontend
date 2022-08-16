import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

// pitu.tk/ -> HomePAge
// pitu.tk/:code -> RedirectPage
// pitu.tk/:code/stats -> StatsPage

import HomePage from '../pages/HomePage';
import RedirectPage from '../pages/RedirectPage';
import StatsPage from '../pages/StatsPage';
import NotFound from '../pages/NotFound';

function Rotas() {
    return (
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route exact path="/:code" element={<RedirectPage/>} />
              <Route exact path="/:code/stats" element={<StatsPage/>} />
              <Route exact path="/*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    )
}

export default Rotas;