import React,{useState} from "react";
//  import { Link } from "react-router-dom"
import axios from 'axios'
 import {useNavigate} from 'react-router-dom'
 
function CreateUser(){
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [age,setAge] = useState()
  const navigate =useNavigate()
//   npm 
 

  const Submit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/create",{name,email,age})
    .then(result =>{
        console.log(result)
         navigate('/')
  })
    .catch(err =>console.log(err))
  }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label html for="">Name</label>
                         <input type="text" placeholder="Enter the Name "  className="form-control"
                         onChange={(e)=>setName(e.target.value)}>

                         </input>
                    </div>
                    <div className="mb-2">
                        <label html for="">Email</label>
                         <input type="text" placeholder="Enter the Email " onChange={(e)=>setEmail(e.target.value)} className="form-control"></input>
                    </div>
                    <div className="mb-2">
                        <label html for="">Age</label>
                         <input type="text" placeholder="Enter the Age " onChange={(e)=>setAge(e.target.value)}  className="form-control"></input>
                    </div>    
                    <button className="btn btn-success" >Submit</button>         
                </form>
             </div>
        </div>       
    )

}

export default CreateUser;