import React from 'react'
import styled from 'styled-components'
import { Zoom } from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';


function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
    
  return (
    
    <Wrap bgImage={backgroundImg}>
            <Slide left triggerOnce>
            <ItemText>
                <h1>{title}</h1>
                {description &&
                    <p>{description}</p>
                }
                
            </ItemText>
            </Slide>
       
        <Buttons>
            <Zoom triggerOnce>
            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>
                {rightBtnText &&
                    <RightButton>{rightBtnText}</RightButton>
                }
                
            </ButtonGroup>
            </Zoom>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>

    </Wrap>
  )
}


const DownArrow = styled.img`
height: 40px;
margin-top: 20px;
animation: animateDown infinite 1.5s;
`

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-image: ${props=>`url("/images/${props.bgImage}")`};
background-size: cover;
background-position:center;
background-repeat:no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items:center;
`

const ItemText = styled.div`
text-align:center;
padding-top: 15vh;
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;

@media (max-width:768px){
    flex-direction: column;
}

`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items:center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor:pointer;
margin: 8px;

`
const RightButton = styled(LeftButton)`
color:black;
opacity: 0,65;
background: white;
`
const Buttons = styled.div`

`

export default Section