// 질문과 입력을 받는 component
// 위에는 라벤더색 질문에 아래는 스티커 입력

import React, {Component} from 'react';
import styled from "styled-components";
import sticker from "../../images/sticker.png";

const Wrap = styled.div`
  width: 40%;
  margin: 10px auto;
  border: 1px solid black;
	position: relative;
`

const Sticker = styled.img.attrs({alt:'sticker image'})`
  width: 400px;
  height: 100px;
  border: 1px solid black;
`

const TextInput = styled.input`
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
  background: #000000;
  
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
`

function EnterText(){
    return (
        <Wrap>
            <Sticker src={sticker}/>

            <TextInput

                // type='password'
                // placeholder='Password'
                // value={this.state.password}
                // onChange={this.handleChange}
                // autoComplete='on'
                // name='password'
            />
        </Wrap>
        
    );
}

export default EnterText;