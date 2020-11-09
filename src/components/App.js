import React, { Component } from "react";

import Header from "@/components/Header";
import About from "@/components/About";
import Support from "@/components/Support";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Support/>
            </div>
        )
    }
}

export default App;