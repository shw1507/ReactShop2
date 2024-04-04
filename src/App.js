import React from "react";
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import data from './data.js';
import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet, } from 'react-router-dom'
import Detail from "./pages/Detail.js";

function App() 
{
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail') }}>Cart</Nav.Link>
            </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"> </div>
          <div className="container">
            <div className="row">
              {
                shoes.map((a, i)=>{
                  return(
                    <Card shoes={shoes[i]} i={i}></Card>
                  )
                })
              }
            </div>
          </div>
          </>
        }/>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}/>
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

export default App;