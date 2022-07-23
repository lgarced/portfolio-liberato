import React from "react";

import {About, Footer, Header, Projects, Skills} from "./container";
import { Navbar } from "./components";
import './App.scss';
import {SocialMedia} from "./components";
import{images} from './constants/images';

const App = () => {
    return (
        <div className="app">
            <Navbar />    
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
            <SocialMedia/>
        </div>
    );
}


export default App;