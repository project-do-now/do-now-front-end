import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import styled from "styled-components";
import {Login, Register, Diary} from '../pages';
import './App.css';
import Main from '../components/main/main';
class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Login onCreate={this.handleCreate}/>}/>
          <Route path='/register' element={<Register onCreate={this.handleCreate}/>}/>
          <Route path='/diary' element={<Diary onCreate={this.handleCreate}/>}/>        
          <Route path='/calendar' element={<Main/>}  />
        </Routes>
      </div>
    );
  }
}


const Container = styled.div`

height: 100vh;
  width: 100%;
  background-color: #e6d0e9;
`;

export default App;