import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from "styled-components"
import Button from "./Button";
import Checkbox from "./Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'
import { searching } from './axios';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    searching().then(res => setData(res));
  }, []);

  console.log(data); 

  const MountainListCard = () => {
    return (
      <li className="lst-mountain__card">
        <div className="photo"><img src="assets/img/01.png" alt=""/></div>
        <div className="info">
          <h3><em>지리산</em> <small><FontAwesomeIcon icon={faLocationDot}/>경남 함양군</small></h3>
          <dl>
            <dt><FontAwesomeIcon className="fa" icon={faMountain}/>난이도</dt>
            <dd>상</dd>
            <dt><FontAwesomeIcon className="fa" icon={faFlag}/>구간거리</dt>
            <dd>832m</dd>
          </dl>
          <dl>
            <dt>상행속도(분)</dt>
            <dd>140</dd>
            <dt>하행속도(분)</dt>
            <dd>140</dd>
          </dl>
        </div>
      </li> 
    )
  }
  return (
    <div className="App">
      <header className="hd">
        <h1><img src="assets/img/logo.png" /></h1>
        <a href="" className="btnlogin"><FontAwesomeIcon className="fa" icon={faArrowRightToBracket}/></a>
      </header>
      <div className="container">
        <div className="sort-group">
          <ul>
            {/* button sort  */}
            <li className="on"><Button text={"나와의 거리순"}></Button></li>
            <li><Button text={"높이순"}></Button></li>
            <li><Button text={"난이도순"}></Button></li>
          </ul>
          <span className="checkbox-type01">
            <label>
            <input type="checkbox" name="" id="" /> 정복 제외
            </label>
          </span>
        </div>
        
        <ul className="lst-mountain">
          <MountainListCard />
        </ul>

        {/* <button type="button">정복 완료</button> */}
      </div>
    </div>
  );
}

export default App;
