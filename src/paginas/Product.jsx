import styled from "styled-components"
import Anuncios from "../components/Anuncios"
import Footer from "../components/Footer"
import NavBar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {mobile} from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px", flexDirection:"column"})}
`

const ImgContainer = styled.div`
  flex: 1;

`

const Image = styled.img`
  width: 80%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`

const Titulo = styled.div`
  font-weight: 200;
-{¿5
}`

const Desc = styled.div`
  margin: 20px 0px;
`

const Precio = styled.div`

`

const FiltroContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`

const Filtro = styled.div`
  display: flex;
  align-items: center;
`

const FiltroTitulo = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FiltroTaste = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FiltroTasteOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
  `

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const Button = styled.button`
  padding: 15px;
  border: 3px solid teal;
  background-color: white;
  cursor: pointer;

  &:hover{
    background-color: #f8f4f4;
  }
`


const Product = () => {
  return (
    <Container>
        <Anuncios/>
        <NavBar/> 
        <Wrapper>
          <ImgContainer>
            <Image src="https://barman.news/wp-content/uploads/2017/10/BARMAN-ACADEMY-BARMANTODAY-ALCOHOL-COCTEL-BEBIDAS-VENTAS-TOP-SMIRNOFF.png"/>
          </ImgContainer>
          <InfoContainer>
            <Titulo>Smirnof</Titulo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fuga sint repudiandae laboriosam vero minima eum quis expedita ea nihil quisquam labore, sunt repellat voluptates provident incidunt aspernatur eos ipsam?</Desc>
            <Precio>$1200</Precio>
            <FiltroContainer>
                <Filtro>
                  <FiltroTitulo>Sabor</FiltroTitulo>
                  <FiltroTaste>
                    <FiltroTasteOption>Citrus</FiltroTasteOption>
                    <FiltroTasteOption>Green Apple</FiltroTasteOption>
                    <FiltroTasteOption>WalterMelon</FiltroTasteOption>
                    <FiltroTasteOption>Raspberry</FiltroTasteOption>
                    <FiltroTasteOption>Bitter Citric</FiltroTasteOption>
                  </FiltroTaste>
                </Filtro>
            </FiltroContainer>
            <AddContainer>
              <AmountContainer>
                  <RemoveIcon/>
                  <Amount>1</Amount>
                  <AddIcon/>
              </AmountContainer>
              <Button>AÑADIR AL CARRITO</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter/>   
        <Footer/>   
    </Container>
  )
}

export default Product