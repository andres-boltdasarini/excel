import React, { Component } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Support from "@/components/Support";
import {Route} from "react-router-dom";
import Bar from "@/components/Bar";
import Account from "@/components/Account";




class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Route exact={true} path='/' component={About}/>
                <Route path='/about' component={About}/>
                <Route path='/support' render={() => <Support/>}/>
                <Route path='/account' render={() => <Account/>}/>
            </div>
        )
    }
}

export default App;