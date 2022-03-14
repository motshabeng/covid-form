import React,{useState} from 'react';

import './App.css';
import CovidForm from "./Components/CovidForm"
import DisplayItems from  './Components/Display';
import Search from './Components/Search';
 

function App() {
  const[list,setList]=useState([]);
 
  const submit = (firstName, lastName,id,age,adress, email,gender,temperature,location,infected)=>{
    let obj =  {
      firstName:firstName,
      lastName:lastName,
      id:id,
      age:age,
      adress:adress,
      email:email,
      gender:gender,
      temperature:temperature,
      location:location,
      infected:infected,
     
    }
    setList([...list,obj]);
  }

  const Delete = data =>{
    const List = list.filter(item=>item.data !== data.data)
    setList(List)
  }
  

  return (
    <div>
      <CovidForm  add={submit}/>
      <DisplayItems data={list} Delete={Delete}/>
     <Search data={list}/>
     
   
    </div>
  );
}

export default App;

