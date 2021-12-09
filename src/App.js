import React from "react";

import {
    Header,
    About,
    Services,
    Experience,
    Project,
    CTA,
    Footer,
} from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <About />
            <Services />
            <Experience />
            <Project />
            <CTA />
            <Footer />
        </div>
    );
};

export default App;
