import React, { Component } from 'react'
import styled from 'styled-components'



const ListItem = styled.li`
width:200px;
height:180px;
background-color:white;
border-radius:5%;
list-style-type:none;
margin:10px;
text-align:center;
justify-content:space-around;
`;
const imgStyle = {
    width: '100px',
    margin: '10px'
}
export default class Item extends Component {

    render() {
        const {item}=this.props
        return (item? (<ListItem >
            <img src={item.pic} style={imgStyle} alt="Loading..." />
                <h3>{item.name}</h3>
            </ListItem>) : 'Welcome to Search the Username in GIT!')
    }
}


