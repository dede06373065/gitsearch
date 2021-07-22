import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.ul`
display:flex;
flex-wrap:wrap;
padding:10px;
font-size:2rem;

`;
const ListItem = styled.li`
width:200px;
height:230px;
background-color:white;
border-radius:5%;
list-style-type:none;
margin:10px;
text-align:center;
justify-content:space-around;
border:1px solid #ddd;
`;
const imgStyle = {
    width: '100px',
    margin: '10px'
}
export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, error } = this.props
        return (
            <Content>{
                isFirst ? 'Enter your name to search' :
                    isLoading ? 'Loading...' :
                        error ? { error } :
                            users.map((userObj) => {
                                return (
                                    <ListItem key={userObj.id}>
                                        <img src={userObj.avatar_url} style={imgStyle} alt="Loading..." />
                                        <h6>{userObj.login}</h6>
                                    </ListItem>
                                )

                            })
            }
            </Content>)
    }
}
