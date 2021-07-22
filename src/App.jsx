import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state={
        users:[],
        isFirst:true,
        isLoading:false,
        error:false
    }
    updateState=(userObj)=>{
        return this.setState(userObj)
    }
    render() {
        return (
            <div>
                <Search updateState={this.updateState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
