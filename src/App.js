import './App.css';
import React, { useEffect } from 'react';
import twin_logo from "./img/twin_logo.png";
import arrow from "./img/arrowRight_icon.svg";
import Right from './Right';


function App() {
    const child = document.querySelectorAll('.gnb');
    const childCount = child.childElementCount;
  return (
    <div className="App">
      <div className='left'>
        <div className='left_logo'>
          <img src={twin_logo}></img>
          <h3>
          Nickname
        </h3>
        <h5>twintest01</h5>
        </div>
        <input type="text" id="test_field"/>
        <div className='menu'>
          <h4>분류 전체보기()</h4>
          <ul class="gnb">Web()<img src={arrow}></img>
            <li></li>
          </ul>
        </div>
      </div>
      <div className='right'>
        <Right />
      </div>
    </div>
  );
}

export default App;
