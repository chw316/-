import './App.css';
import React, { useState, useEffect } from 'react';
import header from "./img/header_img.jpg";
import axios from 'axios';

function Right() {
    const[img, setImg] = React.useState([]);
    const CallApi = async(type) =>{
            const res = await axios.get(`http://10.0.0.61:8080/api/1.0/rooms?type=${type}`);
            const returnValue = res.data.dataList;

            console.log(returnValue);

            setImg(returnValue);
        }

    return (
        <div className='right'>
            <div className='header'>
                <img src={header}></img>
                <h2>TWIN REACT APP</h2>
            </div>
            <div className='API'>
                <div className='api_tab'>
                <div className='api_item' onClick={() => CallApi(1)}>오사카</div>
                <div className='api_item' onClick={() => CallApi(2)}>제주</div>
                <div className='api_item' onClick={() => CallApi(3)}>속초</div>
                </div>

                {img.map((item, index) =>(
                    <div>
                    <img key={index} src={item.url}/>
                    <h3 key={index} >{item.title}</h3>
                    <li key={index} >{item.description}</li>
                    </div>
                ) )}
            </div>
        </div>
    );
}
export default Right;