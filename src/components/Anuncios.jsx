import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    height: 30px;
    background: linear-gradient(to right, black, gray);
    color: white;
    padding-top: 11px;
    padding-left: 25px;
    ${mobile({width: "100%", paddingLeft: "10px", fontSize: "15px"})}
`
const Anuncios = () => {
  return (
    <Container>
        Ofertaa!! 50% de descuento en bebidas seleccionadas :D
    </Container>
  )
}

export default Anuncios