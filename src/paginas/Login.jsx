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
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width:"75%"})}
`

const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>INICIAR SESION</Title>
            <Form>
                <Input placeholder="nombre de usuario"/>
                <Input placeholder="contraseña"/>
                <Button>INGRESAR</Button>
                <Link>No recuerda la contraseña?</Link>
                <Link>Crear una nueva cuenta</Link>               
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login