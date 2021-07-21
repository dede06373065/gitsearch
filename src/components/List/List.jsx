import React, { Component } from 'react'
import Item from '../Item'
import styled from 'styled-components'

const Content = styled.ul`
display:flex;
flex-wrap:wrap;
padding:10px;
`;
export default class List extends Component {
    render() {
        const { items } = this.props
        return (
            <Content>
                {items.map((item, index) => {
                    return (<Item key={index} item={item} />)
                })}
            </Content>
        )
    }
}