import React,{useState} from "react"

function CovidForm(props){
const[firstName,setFirstName]=useState("")
const[lastName,setLastName]=useState("")
const[id,setId]=useState("")
const[age,setAge]=useState("")
const[adress,setAdress]=useState("")
const[email,setEmail]=useState("")
const[location,setLocation]=useState("")
const[gender,setGender]=useState("")
const[temperature,setTemparature]=useState("")
const[infected,setInfected]=useState("")

const handleSubmit = (e)=>{
    props. add(firstName, lastName,id,age,adress, email,gender,temperature,location,infected );
   }
   
   const  handleFirstName = (e)=>{
     console.log(e.target.value)
     setFirstName(e.target.value);
  
   }
   const  handleLastName = (e)=>{
    console.log(e.target.value)
    setLastName(e.target.value);
 
  }
  const  handleId = (e)=>{
    console.log(e.target.value)
    setId(e.target.value);
 
  }
  const handleAge = (e)=>{
    console.log(e.target.value)
    setAge(e.target.value);
  
  }
  const handleAdress = (e)=>{
    console.log(e.target.value)
    setAdress(e.target.value);
  
  }
  
  const handleEmail= (e)=>{
    console.log(e.target.value)
    setEmail(e.target.value);
  
  }
  const handleLocation= (e)=>{
    console.log(e.target.value)
    setLocation(e.target.value);
  
  }
  const handleGender= (e)=>{
    console.log(e.target.value)
    setGender(e.target.value);
  
  }
  const handleTemperature = (e)=>{
    console.log(e.target.value)
    setTemparature(e.target.value);
  
  }
  const handleInfected = (e)=>{
    console.log(e.target.value)
    setInfected(e.target.value);
  
  }

return(

    <div className="body">
       <di className="search"> <div></div>
       </di>
        <h1 className="head"><underline>Covid-Form</underline></h1>
        <div className="containers3">
        <div className="containers1">
        
        <div className="contain1">
        <input type="text" placeholder="FirstName" onChange={handleFirstName}/>
        <input type="text" placeholder="LastName" onChange={handleLastName}/>
       
        <input type="text" placeholder="Id" onChange={handleId}/>
        <input type="text" placeholder="Age" onChange={handleAge}/>
        </div>
        
        </div>
        <div className="containers2">
          <div className="contain3">
        <input type="text" placeholder="Adress" onChange={handleAdress}/><br></br>
        <input type="text" placeholder="Email" onChange={handleEmail}/><br></br>
       
        <input type="text" placeholder="Temperature" onChange={handleTemperature}/><br></br>
        <input type="text" placeholder="Location" onChange={handleLocation}/><br></br>
        </div>
       
        </div>
        </div>
       <div className="row">
       <div className="containers4">
        <label className="gender">Gender</label>
       
        <div className="gen">
        <input type="radio" value="female" placeholder="Gender" onChange={handleGender}/>Female
        <input type="radio" value="female" placeholder="Gender" onChange={handleGender}/>Male<br></br></div>
        </div>
        <div>
        <div className="label">
          
        <label>infected</label>
        <div className="check">
        yes
       <input type="checkbox"  value="infected" placeholder="infected" onChange={handleInfected}/> 
       no<input type="checkbox"  value="infected" placeholder="infected" onChange={handleInfected}/>
        </div>
        </div>
        </div>
        </div>
        <br></br>
        <div className="container">
        <div><input type="checkbox"/>Have you ever experienced any covid symtoms</div>
        <div><input type="checkbox"/>Have you ever been in contact with an infected covid person</div>
        <div><input type="checkbox"/>Have you ever ever travelled out of province in less than two weeks</div>
        </div><br></br>
       
        <div className="button"><button onClick={handleSubmit}>submit</button><br/></div>
       
       
       
        

    </div>
)
}





export default CovidForm;
