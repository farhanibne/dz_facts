import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";

function Login() {
 

  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  
  return (
    <div className="login">
      <div className="login__container">
      
      
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick={signIn}>Continue With Google</p>
            </div>
            
           
          </div>
          
        </div>
       
       
      </div> 
     
    </div>
  );
}

export default Login;