import axios from "axios"
import {useState} from "react"

function Reg(){
    const[data,setdata]=useState(
        {
            username:"",
            email:"",
            password:""
        }
    )
    const changeName=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submit= async()=>
    {
        try{
            const res=await axios.post("http://localhost:8080/reg",data)
            alert(res.data)
        }
        catch(xyz){
            alert(xyz.response.data)
        }
    }
    return(
        <>
        <h1>iam App</h1>
        <input onChange={changeName} name="username" placeholder="enter username"/>
        <input onChange={changeName} name="username" placeholder="enter username"/>
        <input onChange={changeName} name="username" placeholder="enter username"/>
        <button onClick={submit}>register</button>
        </>
    )
}
export default Reg
