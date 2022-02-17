// 질문과 입력을 받는 component
// 위에는 라벤더색 질문에 아래는 스티커 입력
import React, {useState} from 'react';
import styled from "styled-components";
import sticker from "../../images/sticker.png";
import smallFlower from "../../images/small_flower.png";

const Question=styled.div`
  font-size: 38px;
  color: #D498D0;
  margin-top: 7px;
`

const Wrap = styled.div`
  width: 40%;
  margin-top: 5px;
  margin-left: 30px ; 
  border: none;
	position: relative;
  
`
const Sticker = styled.img.attrs({alt:'sticker image'})`
  width: 450px;
  height: 70px;
`

const TextInput = styled.input.attrs(props=>({
  type: props.type,
  placeholder: props.placeholder,
}))`
  flex: 1 0;
  min-width: 100px;
  min-height: 30px;
  font-size: 30px;
  background-color: transparent;
  padding-left: 30px;
  border: 0;
  &:focus {
    outline: none;
  }
  
	position: absolute;
	top: 45%;
	left: 70%;
	transform: translate( -50%, -50% );
`

const Row = styled.div`

  display: flex;
  flex-direction: row;
`
const Column = styled.div`

  display: flex;
  flex-direction: column;
`


const EnterText = (props) =>{
    return (
      <Column>
        <Row>
          <img src={smallFlower}/>
          <Question>{props.text}</Question>
        </Row>
        <Wrap>
            <Sticker src={sticker}/>
            <TextInput
              type= {props.type}
              placeholder= {props.placeholder}
              onChange = {(e) => {props.setData(e.target.value)}}
            />
        </Wrap>
      </Column>
        
    );
}

export default EnterText;