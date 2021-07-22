import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import styled from 'styled-components'

const Main=styled.div`
font-family:'Nanum Gothic', sans-serif;
background-color:rgb(242,237,216);
`;

export default class  App extends Component {
    state = {
        itemsDetails:[]
    }
    changeState=(arr)=>{
        return(this.setState({itemsDetails:arr}))
    }
    render(){
        const {itemsDetails}=this.state
        return (
            <Main>
            <Search changeState={this.changeState}/>
            <List items={itemsDetails}/>
            </Main>
        )
    }  
}

