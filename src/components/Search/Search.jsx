import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
   
    search=()=>{
        const info=this.keyWords.value
        console.log(info)
        this.props.updateState({isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${info}`).then(
            response=>{
                this.props.updateState({isLoading:false,users:response.data.items})
            }
        ).catch((err)=>{
            this.props.updateState({isLoading:false,error:err.message})
        })
    }

    render() {
        return (
            <SearchBar>
                <h1>Search your name in GitHub</h1>
                <SearchInput type="text" ref={c=>this.keyWords=c}/> &nbsp;
                <SearchButton onClick={this.search}>Submit</SearchButton>
            </SearchBar >
        )
    }
}

//利用ref来获取了input输入框里面输入的值非常方便
//再利用this.keywords.value在函数中进行运用非常方便