import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://thumbs.dreamstime.com/z/patr%C3%B3n-transparente-de-botella-alcohol-fondo-pantalla-botellas-geom%C3%A9tricas-soju-estilo-grabado-vintage-ilustraci%C3%B3n-vectorial-186317357.jpg");
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({width:"80%"})}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREAR CUENTA</Title>
            <Form>
                <Input placeholder="nombre"/>
                <Input placeholder="apellido"/>
                <Input placeholder="nombre de usuario"/>
                <Input placeholder="email"/>
                <Input placeholder="contraseña"/>
                <Input placeholder="confirmar contraseña"/>
                <Agreement>Al crear una cuenta, y doy mi consentimiento para el procesamiento de mis datos personales de acuerdo con la <b>política de privacidad.</b></Agreement>
                <Button>CREAR</Button>               
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register