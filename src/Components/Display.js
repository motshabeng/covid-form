import React from "react";


function DisplayItems(props) {

  const handleDelete = (item) => {
    props.Delete(item)

    
  }
  
  return (
    <div>
      {props.data.map((item) => {
        return (
          <div>
            <div className="card">
              <h3>FirstName:{item.firstName}</h3>
              <h3>LastName:{item.lastName}</h3>
              <h3>Adress:{item.adress}</h3>
              <h3>Id No:{item.id}</h3>
              <h3>Age:{item.age}</h3>
              <h3>Email:{item.email}</h3>
              <h3>Temperature:{item.temperature}</h3>
              <h3>Location:{item.location}</h3>
              <h3>Gender:{item.gender}</h3>
              <h3>Infected:No{item.infected}</h3>
              <button className="button2" onClick={() => handleDelete(item)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}






export default DisplayItems;