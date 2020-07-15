import React, {useState, useEffect} from "react";
import axios from "axios"
import {API_KEY, BASE_URL} from "./Constants"
import Card from './Components/Card'
// import Header from './Components/Header'
import "./App.css";

export default function App(){

  const [nasaData, setNasaData] = useState([])

  useEffect(() =>{
    // axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ')
    .then(res=>{
      setNasaData(res)
      console.log(res);
    })
    .catch(err =>{
      console.log(err);
      debugger
    })
  },[])

  return (
    <div className="App">
      {/* <Header /> */}
      <Card date={nasaData.date}
             explanation={nasaData.explanation} 
             image={nasaData.url} 
             title={nasaData.title} />
    </div>
  );
}

// export default App;
