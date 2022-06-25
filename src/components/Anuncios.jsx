import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background: linear-gradient(to right, black, gray);
    color: white;
    padding-top: 8px;
    padding-left: 25px;
`

const Anuncios = () => {
  return (
    <Container>
        Ofertaa!! 50% de descuento en bebidas seleccionadas :D
    </Container>
  )
}

export default Anuncios