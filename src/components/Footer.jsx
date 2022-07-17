import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from "../responsive"

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-size: 45px;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`


const Center = styled.div`
    flex: 1; 
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom; 30px;
    padding-bottom: 20px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const ListItem = styled.li`
    padding-bottom: 10px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "lightgray"})}
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Pago = styled.img`

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>DITANO B.</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium pariatur soluta harum exercitationem? Aperiam corporis ea eos reiciendis cumque!</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>PREGUNTAS FRECUENTES</Title>
            <List>
                <ListItem>COMO COMPRAR</ListItem>
                <ListItem>TIEMPOS Y COSTOS DE ENVIO</ListItem>
                <ListItem>FORMA DE PAGO</ListItem>
                <ListItem>CONTACTANOS</ListItem>
                <ListItem>BOTON DE ARREPENTIMIENTO</ListItem>
            </List>
        </Center>
        <Right>
                <Title>Contacto</Title>
                <ContactItem><RoomIcon style={{marginRight:"10px"}}/>Calle falsa 123</ContactItem>
                <ContactItem><PhoneIcon style={{marginRight:"10px"}}/>+011 15 1234 5679</ContactItem>
                <ContactItem><EmailIcon style={{marginRight:"10px"}}/>contacto@ditano.b.com</ContactItem>
            <Pago src="https://i.ibb.co/Qfvn4z6/payment.png"></Pago>
        </Right>

    </Container>
  )
}

export default Footer