import React from 'react'
import { useNavigate } from "react-router-dom";
import '../App.css'

function Home() {
    let navigate = useNavigate();

    const loginPage = () =>{ 
    let path = `login`; 
    navigate(path);
    }

    const RegisterPage = () =>{ 
        let path = `register`; 
        navigate(path);
    }
  return (
    <div>
        <button onClick={loginPage}
        >
            Login
        </button>
        <br/>
        <br/>
        <button onClick={RegisterPage}
        >
            Register
        </button>
    </div>
  )
}

export default Home