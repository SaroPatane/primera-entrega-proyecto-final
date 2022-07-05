import styled from "styled-components"
import Anuncios from "../components/Anuncios"
import Footer from "../components/Footer"
import NavBar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import {mobile} from "../responsive"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px", display: "flex", flexDirection: "column"})}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
    ${mobile({marginRight:"0px"})}
`

const Select = styled.select`
    padding: 8px;
    margin-right: 5px;
    font-size: 15px;
    ${mobile({margin:"10px 0px"})}
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Anuncios/>
        <NavBar/>
        <Title>Bebidas Populares</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Elige alguna: </FilterText>
                <Select>
                    <Option disabled selected>Bebida</Option>
                    <Option>Smirnoff</Option>
                    <Option>San Miguel</Option>
                    <Option>Bacardi</Option>
                    <Option>Red Label</Option>
                    <Option>Capitan Morgan</Option>
                    <Option>Absolut</Option>
                    <Option>Jack Daniels</Option>
                    <Option>Baileys</Option>
                </Select>
                <Select>
                    <Option disabled selected>Tamaño</Option>
                    <Option>Chica 473ml</Option>
                    <Option>Mediana 750ml</Option>
                    <Option>Grande 1l</Option>
                </Select>
                </Filter>
            <Filter>
                <FilterText>Pago con: </FilterText>
                <Select>
                    <Option disabled selected>Medio</Option>
                    <Option>Efectivo al contado</Option>
                    <Option>Tarjeta</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList