import axios from "axios"
import {useState} from "react"

function Reg(){

    const[data,setdata]=useState({
        username:"",
        email:"",
        password:""
    })

    const changeName=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }

    const submit= async()=>{
        try{
            const res = await axios.post(
                "https://new.onrender.com/register",
                data
            )
            alert("Register Successfully")
        }
        catch(xyz){
            alert("Registration Failed")
        }
    }

    return(
        <>
        <h1>iam App</h1>
        <input onChange={changeName} name="username" placeholder="enter username"/>
        <input onChange={changeName} name="email" placeholder="enter email"/>
        <input onChange={changeName} name="password" placeholder="enter password"/>
        <button onClick={submit}>register</button>
        </>
    )
}

export default Reg
