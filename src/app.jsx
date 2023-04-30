import { BrowserRouter } from "react-router-dom";

import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Work,
StarCanvas} from './components';

const { useState } = require("react");

function App () {
    const [count,setCount] = useState (0)
    return (
    <BrowserRouter>
    <div className="relative z-0 bg-primery">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
        </div>
    </div>
    </BrowserRouter>
    )
}

