import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {

    const [burgerStatus, setBurgerStatus] = useState(true)
    const cars = useSelector(selectCars)

    
    

  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt=""/>
        </a>
        <Menu>
            {cars && cars.map((car, index)=>(
                <a key={index} href="#">{car}</a>
            ))}
            
            
        </Menu>
        <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={()=>{setBurgerStatus(true)}}/>

        </RightMenu>

        <BurgerNav show={burgerStatus}>
            <CloseWrapper> <CustomClose onClick={()=>{setBurgerStatus(false)}}></CustomClose></CloseWrapper>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade In</a></li>
            <li><a href="#">Demo Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Find us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
            
        </BurgerNav>

    </Container>
  )
}


const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`

display: flex;
justify-content: flex-end;

`


const BurgerNav = styled.div`

right:0;
top:0;
bottom:0;
width:300px;
position:fixed;
background: #fff;
z-index = 100;
list-style:none;
padding:30px;
display:flex;
text-align:start;
flex-direction:column;
transition: transform 0.2s;

li{
    padding: 10px 15px;
    border-bottom: 1px solid rgb(0,0,0,0.2);
    font-weight:600;
}

transform: ${props=> props.show ? 'translateX(0)': 'translateX(100%)'};

`


const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top:0;
right:0;
left:0;
z-index:1;
`
const Menu = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

@media (max-width:768px){
    display: none;
}

a{
    font-weight: 600;
    text-transfrom: uppercase;
    padding: 0 10px;
}
`
const RightMenu = styled.div`
align-items: center;
display: flex;
a{
    font-weight: 600;
    text-transfrom: uppercase;
    margin-right: 10px;
}
`

export default Header