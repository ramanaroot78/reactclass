import React,{useState} from 'react'
function Login() {
  const [Username,setUsername]= useState("");
  const [Password,setPassword]= useState("");
  const[error,seterror]=useState(false);
  const formHandler=(event)=>{
    event.preventDefault();
    if(Username.length===0 && Password.length===0)
    { 
      seterror(true);
    }
    const loginobj={
      name:Username,
      pwd:Password
    }
     console.log(loginobj);
     alert(JSON.stringify(loginobj));
  
} 
  return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username :<input type="text" value={Username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/><br/> 
     <div>
     {error && Username.length==0?
      <label style={{color:'red'}}>
      </label>: ""}
     </div>
    Password :<input type="Password" value={Password} placeholder="Password"onChange={(e) => setPassword(e.target.value)}/><br/>
    <button type="SUBMIT">Login</button>
    </form>
    </div>
     
  )
     }

export default Login;