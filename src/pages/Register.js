import React, {Component, useState} from "react";
import styled from "styled-components";
import Page from '../components/PageTemplate';

import rings from '../images/center_rings.png';
import ok from "../images/ok.png";
import back from "../images/back.png";  
import EnterText from '../components/register/EnterText';

const Flower = styled.img.attrs({alt:'flower image'})`
  width: 150px;
  height: 150px;
  
  margin: 0 auto; 
      display: block;
      justify-content: center;
`
const Wrap = styled.div`
  width: 40%;
  margin: 10px auto;
  border: none;
	position: relative;
`

const Sticker = styled.img.attrs({alt:'sticker image'})`
  width: 400px;
  height: 100px;
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
  
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );
`

const DoublePage = styled(Page)`

 width: 1400px;
`

const Ring = styled.img.attrs({alt: 'rings'})`
  height:100vh;
  margin: 0 auto; 
`

const RegisterTemplate = styled.div`
  width: 540px;
  height: 88vh;

  position: relative;
  background: white;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  margin-top: 60px;
  margin-left: 40px;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
`

const Header = styled.img.attrs({alt:'header'})`
  display: flex;
`


const Row = styled.div`

  display: flex;
  flex-direction: row;
`
const Column = styled.div`

  display: flex;
  flex-direction: column;
`
const Register = (props) => {
    const [data, setData] = useState("initial data");

    // state={
    //     name: '',
    //     phoneNumber: '',
    //     birthday: '',
    //     emailAddress: '',
    //     password: '',
    //     passwordConfirm: ''
    // }

    // handleChange = (e) => {
    //     this.setState({
    //     [e.target.name] : e.target.value
    //     })
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault(); // prevent page reloading
    //     this.props.onCreate(this.state);
    //     this.setState({
    //         // name: '',
    //         // phoneNumber: '',
    //         // birthday: '',
    //         // emailAddress: '',
    //         // password: '',
    //         // passwordConfirm: ''
    //     })
    // }

    // handleClick = (e) => {
    //     // href: 뒤로가기 o , replace: 뒤로가기 x
    //     window.location.href = '/'
    // }


    // handleDiaryClick = (e) => {
    //     window.location.href = '/calendar'
    // }
    
        return (
            // <form onSubmit={this.handleSubmit}>
  
              <DoublePage>
                <Row>
                  {/* First page */}
                  <RegisterTemplate>
                  <Column>
                    <div>{data}</div>
                    <EnterText  
                      text='What is your password?' 
                      type='password' 
                      placeholder='Password' 
                      setData={setData}>
                    </EnterText>

                    {/* <input
                      placeholder='name'
                      value={this.state.name}
                      onChange={this.handleChange}
                      name='name'
                    />
                    <input
                      placeholder='phone number'
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                      name='phoneNumber'
                    />
                    <input
                      placeholder='birthday'
                      value={this.state.birthday}
                      onChange={this.handleChange}
                      name='birthday'
                    />
                    <input
                      placeholder='email address'
                      value={this.state.emailAddress}
                      onChange={this.handleChange}
                      name='emailAddress'
                    />
                    <input
                      type='password'
                      placeholder='password'
                      value={this.state.password}
                      onChange={this.handleChange}
                      autoComplete='on'
                      name='password'
                    />
                    <input
                      type='password'
                      placeholder='confirm password'
                      value={this.state.passwordConfirm}
                      onChange={this.handleChange}
                      autoComplete='on'
                      name='passwordConfirm'
                    /> */}
                  </Column>
                  
                  </RegisterTemplate>
                  
                  {/* Ring */}
                  <Ring src={rings}></Ring>
                  
                  {/* Second Page */}
                  <RegisterTemplate>
                    {/* <Row>
                      <Flower type="image" src={ok} onClick={this.handleDiaryClick} /> 
                      <Flower type="image" src={back} onClick={this.handleClick} /> 
                    </Row> */}
                  </RegisterTemplate>

            </Row>
            </DoublePage>
            
            // </form>
        );
  
}

export default Register;