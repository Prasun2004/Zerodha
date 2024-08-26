import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let[isValid,setIsValid]=useState(true);

    async function submit(e){
        if (!email || !password) {
            setIsValid(false);
            e.preventDefault();
            return;
        }
        e.preventDefault();
        
        try{

            await axios.post("http://localhost:3002/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">
               <Box
                     component="form"
                     sx={{
                     '& .MuiTextField-root': { m: "10px", width: '25ch' },
                      }}
                     noValidate
                     autoComplete="off"
                    ></Box>
                <br/><br/>
               <form action="POST" >
                <label >Email</label>
                <br/>
               <TextField 
                 required
                 id="outlined-required"
                 label="Required"
                 defaultValue=""
                 onChange={(e)=>{setEmail(e.target.value)}}
               />
                   <br/><br/>
                   <label>Password</label>
                   <br/>
               <TextField
                 required
                 type="password"
                 id="outlined-required"
                 label="Required"
                 defaultValue=""
                 onChange={(e)=>{setPassword(e.target.value)}}
               />
               {!isValid &&<p style={{color:"red"}}>please enter all field</p>}
                   <br/><br/>
                   <Button onClick={submit} variant="contained" color="success">Submit</Button>
   
               </form>
                 <br />   
                 <p>OR</p>
                 <br />
     
                 <Button  variant="contained" href="/Login">Signup</Button>
        </div>
    )
}

export default signup