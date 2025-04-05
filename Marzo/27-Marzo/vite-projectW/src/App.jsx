// rafce
import React from 'react'
import "./App.css" //Esto se agrego

import Header from './Components/Header/Header'
import CardPersonal from './Components/CardPersonal/CardPersonal'

const App = () => {

  const arrayImgs=[
    {name: "Uno", img: "https://media.istockphoto.com/id/146059113/es/foto/iguana.jpg?s=612x612&w=0&k=20&c=SCmCd7ma4mW6u7HkngnHlwIQ-rwcTA8IpNtHuIyCRMY="},
    {name: "Dos", img: "https://media.istockphoto.com/id/146059113/es/foto/iguana.jpg?s=612x612&w=0&k=20&c=SCmCd7ma4mW6u7HkngnHlwIQ-rwcTA8IpNtHuIyCRMY="},
    {name: "Dos", img: "https://media.istockphoto.com/id/146059113/es/foto/iguana.jpg?s=612x612&w=0&k=20&c=SCmCd7ma4mW6u7HkngnHlwIQ-rwcTA8IpNtHuIyCRMY="},
    {name: "Tres", img: "https://media.istockphoto.com/id/146059113/es/foto/iguana.jpg?s=612x612&w=0&k=20&c=SCmCd7ma4mW6u7HkngnHlwIQ-rwcTA8IpNtHuIyCRMY="}
  ];

  return (
    <>
    <Header />
    <main>
    {/* <CardPersonal name={"Uno"}/>
    <CardPersonal name={"Dos"}/>
    <CardPersonal name={"Tres"}/> */}

    {arrayImgs.map((item, id)=>{return(
      <CardPersonal key={id} name={item.name} img={item.img}/>
    )})

    }
    </main>
    </>
  )
}

export default App