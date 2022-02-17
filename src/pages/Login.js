import React, {Component} from 'react';
import styled from "styled-components";
import purpleFlower from "../images/purple_flower.png";
import lavenderFlower from "../images/lavender_flower.png";
import login from "../images/login.png";
import register from "../images/register.png";
import rings from '../images/rings.png';
import sticker from "../images/sticker.png";
import title from "../images/cover_title_box.png";
import Page from '../components/PageTemplate';
import ImageButton from 'react-image-button';
// import './Login.css'

const Flower = styled.img.attrs({alt:'flower image'})`
  width: 150px;
  height: 150px;
  
  margin: 0 auto; 
      display: block;
      justify-content: center;
`
const TitleBox = styled.img.attrs({alt: 'title image'})`
  width: 555px;
  height: 252px;
  margin: 10px;
`

const Row = styled.div`

  display: flex;
  flex-direction: row;
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

class Login extends Component {
    state ={
        id: '',
        password:''
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name] : e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault(); // prevent page reloading
        this.props.onCreate(this.state);
        this.setState({
            id: '',
            password:''
        })
    }

    handleClick = (e) => {
        // href: 뒤로가기 o , replace: 뒤로가기 x
        window.location.href = '/register'
    }

    handleDiaryClick = (e) => {
      window.location.href = '/calendar'
  }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <Page>
              
              <TitleBox src={title}/>

              <Wrap>
                <Sticker  src={sticker}/>
                <TextInput
                      type='text'
                      placeholder='ID'
                      value={this.state.id}
                      onChange={this.handleChange}
                      name='id'
                />
              </Wrap>

              <Wrap>
                <Sticker src={sticker}/>
            
                <TextInput
                  type='password'
                  placeholder='Password'
                  value={this.state.password}
                  onChange={this.handleChange}
                  autoComplete='on'
                  name='password'
                />
              </Wrap>
                
          {/* <div>{this.state.id} {this.state.password}</div>   */}
          <Row>
            <Flower type="image" src={login} onClick={this.handleDiaryClick} /> 
            <Flower type="image" src={register} onClick={this.handleClick} /> 
          </Row>  
           </Page>
 
          </form>
        );
      }
}

export default Login;