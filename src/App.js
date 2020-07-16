import React, {useState, useEffect} from "react";
import axios from "axios"
import {API_KEY, BASE_URL, TODAYS_DATE} from "./Constants"
import Card from './Components/Card'
import Header from './Components/Header'
import styled from 'styled-components'
import "./App.css";

const StyledApp = styled.div`
      /* background-color: red; */
      /* background-image:"https://media.giphy.com/media/LOXGmyPsXPT8VyAuCS/giphy.gif"; */
      /* background-image: url("/assets/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg") */
      background-image: url("https://media.giphy.com/media/LOXGmyPsXPT8VyAuCS/giphy.gif");
      background-size: cover;
`




export default function App(){

  const [nasaData, setNasaData] = useState([])
  useEffect(() =>{
    // axios.get(`${BASE_URL}/apod?date=${TODAYS_DATE}&api_key=${API_KEY}`)
    axios.get(`${BASE_URL}/apod?date=2020-06-03&api_key=${API_KEY}`) // test api for video
    .then(res=>{
      setNasaData(res.data)
      console.log(res.data.url)
    })
    .catch(err =>{
      console.log(err);
      // debugger
    })
  },[])

  // console.log(nasaData.url)

  return (
    <StyledApp className="App">
      
      <Header />

      {/* <DateSelector /> */}
      <input type="date" id="myDate" value={TODAYS_DATE}></input>
      <Card date={nasaData.date}
             explanation={nasaData.explanation} 
             image={nasaData.url} 
             title={nasaData.title} />
    </StyledApp>
  );
}