import React, { useState } from 'react';
import SignUp from '../api/SignUp/SingUp';


const SingUp = () => {
    const [phone,setPhone]=useState()
    const [password,setPassword]=useState()
    const send=()=>{
     
        const user={
            phone,
            password,
        }
        SignUp(user,(isoke,data)=>{
            
        })
    }
    return (
        <>
        {/* Sing up section */}
        <div>
            <input onChange={e=>setPhone(e.target.value)} type="text" />
            <input onChange={e=>setPassword(e.target.value)} type="text" />
            <button onClick={send}>ارسال</button>
        </div>
        </>
        
    );
};

export default SingUp;