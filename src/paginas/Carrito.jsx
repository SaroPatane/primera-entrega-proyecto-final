import styled from "styled-components"
import Navbar from "../components/Navbar"
import Anuncios from "../components/Anuncios"
import Footer from "../components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import {mobile} from "../responsive"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`
    display: flex;
    ${mobile({display:"none"})}
`

const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 10px 10px;
`


const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``

const ProductId = styled.span``

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    displey: flex;
    justify-content;space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"}
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;      
`

const Carrito = () => {
  return (
    <Container>
        <Anuncios/>
        <Navbar/>
        <Wrapper>
            <Title>TU CARRITO</Title>
            <Top>
                <TopButton>CONTINUAR COMPRANDO</TopButton>
                <TopTexts>
                <TopText>Bolsa de compra(2)</TopText>
                    <TopText>Tu lista de deseos(0)</TopText>
                </TopTexts>
                <TopButton type="filled">SALIR</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://bottegaalcolica.com/7819-thickbox_default/vodka-smirnoff-blu-1l.jpg"/>
                            <Details>
                                <ProductName><b>Producto:</b> Smirnoff Blue</ProductName>
                                <ProductId><b>ID:</b>1616244</ProductId>
                                <ProductSize><b>Tamaño:</b>mediano</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveOutlinedIcon/>
                                <ProductAmount>2</ProductAmount>
                                <AddIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$1200</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://hiperlibertad.vteximg.com.br/arquivos/ids/182662-1000-1000/Vodka-Saborizado-Watermelon-Smirnoff-700-cc-1-7564.jpg?v=637608317537900000"/>
                            <Details>
                                <ProductName><b>Producto:</b> Smirnoff Watermelon</ProductName>
                                <ProductId><b>ID:</b>16548532</ProductId>
                                <ProductSize><b>Tamaño:</b>mediano</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <RemoveOutlinedIcon/>
                                <ProductAmount>1</ProductAmount>
                                <AddIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>$1300</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Resumen del Pedido</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$3700</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Envio estimado</SummaryItemText>
                        <SummaryItemPrice>$400</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Descuento de envio</SummaryItemText>
                        <SummaryItemPrice>$ -400</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$3700</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Ver Detalle</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Carrito