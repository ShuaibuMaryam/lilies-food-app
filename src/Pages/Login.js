import React, { useState } from 'react'
import loginImage from '../Assets/login-img.png'
import { ToastContainer, toast } from 'react-toastify';


function Login() {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {

        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        let user = JSON.parse(sessionStorage.getItem('user'))
        console.log(user)

        if(loginData.email === user.email && loginData.password === user.password){

            toast.success('Login successful!')
             
            setInterval(() => {

                window.location = '/dashboard'
                
            }, 3000);

        }else{
            toast.error('Incorrect login details')
        }
    }

  return (
    <div>
        <ToastContainer />
        
        <div className='login'>
            
            <div className='login-image'>
                <img src={loginImage}/>
            </div>

            <div className='login-form'>

                <h3>Welcome Back!</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input type='email' placeholder='Your Email address' name='email' onChange={handleChange}/>
                    </div>
                    <div>
                        <input type='password' placeholder='Your Password' name='password' onChange={handleChange}/>
                    </div>
                    <div>
                        <button>LOGIN</button>
                    </div>
                </form>

                <div className='login-footer'>
                    <a href='#'>Create an account</a>
                    <a href='#'>Forgot Passoword</a>
                </div>

            </div>
        </div>    
    </div>
  )
}

export default Login