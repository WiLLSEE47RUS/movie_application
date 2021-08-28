import React from 'react';
//routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Header from "./components/Header/Header.js";
import Home from "./components/Home.js";
import Movie from './components/Movie.js'
import NotFound from "./components/NotFound.js";
// styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/:movieId' element = {<Movie/>}/>
            <Route path = '/*' element = {<NotFound/>}/>
        </Routes>
        <GlobalStyle />
    </Router>
)

export default App;
