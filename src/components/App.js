import React, { Component } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Support from "@/components/Support";
import {Route} from "react-router-dom";




class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Route path='/about' component={About}/>
                <Route path='/support' render={() => <Support/>}/>
            </div>
        )
    }
}

export default App;