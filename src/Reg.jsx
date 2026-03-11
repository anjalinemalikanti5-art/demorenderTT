import axios from "axios"
import {useState} from "react"

function Reg(){

const [data,setdata] = useState({
username:"",
email:"",
password:""
})

const changeName = (e)=>{
setdata({...data,[e.target.name]:e.target.value})
}

const submit = async ()=>{
try{
const res = await axios.post(
"https://new.onrender.com/register",
data
)
alert(res.data)
}
catch(xyz){
alert("Registration Failed")
}
}

return(
<>
<h1>I am App</h1>

<input onChange={changeName} name="username" placeholder="Enter username"/>

<input onChange={changeName} name="email" placeholder="Enter email"/>

<input onChange={changeName} name="password" placeholder="Enter password"/>

<button onClick={submit}>Register</button>

</>
)
}

export default Reg
