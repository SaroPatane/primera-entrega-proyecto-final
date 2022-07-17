import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive.js"

const Container = styled.div`
    height: 60px;
    ${mobile({height: "60px", width: "200px"})}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding: "0px 10px"})}
`

const Izquierda = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    ${mobile({width:"100%"})}
`;

const Lenguaje = styled.span`
    font-size: 15px;
    cursor: pointer;
    ${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding-bottom: 3px;
    padding-top: 3px;
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px", paddingLeft: "10px"})}
`

const Centro = styled.div`
    flex:1;
    text-align: center;
`;

const Logo = styled.h1`
    font-size: 40px;
    ${mobile({fontSize: "15px", paddingLeft: "15px"})}
`

const Derecha = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content:flex-end;
    padding-right: 10px;
    ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin: 25px;
    ${mobile({fontSize: "12px", marginLeft:"10px"})}
`

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Izquierda>
                    <Lenguaje>ES</Lenguaje>
                    <SearchContainer>
                        <Input placeholder="buscar"/>
                        <SearchIcon style={{color: "gray", fontSize:20}}/>
                    </SearchContainer>
                </Izquierda>
                <Centro>
                    <Logo>DITANO B.</Logo>
                </Centro>
                <Derecha>
                    <MenuItem>REGISTRARSE</MenuItem>
                    <MenuItem>INGRESAR</MenuItem>
                    <Badge color="secondary" badgeContent={4}>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </Derecha>

            </Wrapper>
        </Container>
    )
}

export default NavBar