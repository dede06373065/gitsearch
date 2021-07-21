import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';


const SearchBar = styled.div`
height:130px;
background-color:#ddd;
text-align:center;
`;
const SearchInput = styled.input`
font-size:1.5rem;
&:hover{
    border:1px solid lightblue;
    box-shadow:3px 3px 3px lightblue;
}`;
const SearchButton = styled.button`
font-size:1.5rem;
font-weight:bolder;
color:darkblue;
&:hover{
    cursor:pointer;
}`;
export default class search extends Component {
    state = {
        info: '',
        itemsDetails: []
    }
    handleUserName = (event) => {
        return (this.setState({ info: event.target.value }))
    }
    getInfo = () => {
        const { info } = this.state
        if (info !== '') {
            axios.get(`https://api.github.com/search/users?q=${info}`).then(
                res => {
                    const newArr = res.data.items
                    let temp={}
                    const details=[]
                    newArr.forEach((item)=>{
                        temp={pic:item.avatar_url,name:item.login}
                        details.push(temp)
                    })
                    this.setState({ itemsDetails: details })
                    this.props.changeState(this.state.itemsDetails)  
                }
            ).catch((err) => {
                console.log(err)
            })
        }
    }
    render() {
        
        return (
            <div>
                <SearchBar>
                    <h1>Search your name in GitHub</h1>
                    <SearchInput type="text" onChange={this.handleUserName} />&nbsp;
                    <SearchButton onClick={this.getInfo}>Submit</SearchButton>
                </SearchBar>
            </div>
        )
    }
}
