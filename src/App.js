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
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
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
