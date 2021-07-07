import React, {Component} from 'react'
import Navbar from './component/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Coconut from './pages/Coconut'
import Banana from './pages/Banana'
import Mango from './pages/Mango'

class App extends Component{
    render(){
        return(
            <>
                <BrowserRouter>
                    <Navbar />
                    {/* 여기서부터 내용 보이는 영역(header 아래) */}
                    <Switch>
                        <Route exact path="/" component={Coconut} />
                        <Route exact  path="/banana" component={Banana} />
                        <Route exact  path="/mango" component={Mango} />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}

export default App 