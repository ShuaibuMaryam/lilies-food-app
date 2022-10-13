import React, {useState} from 'react'
import signupImage from '../Assets/signup-img.png'
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
    const [signupData, setSignupData] = useState({
        name: '', 
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        sessionStorage.setItem('user', JSON.stringify(signupData))

        toast.success('Sign up successful!')

        setInterval(() => {

            window.location = '/login'
            
        }, 4000);
    }

  return (
    <div>
        <ToastContainer />

        <div className='login signup'>

            <div className='login-image'>
                <img src={signupImage}/>
            </div>

            <div className='login-form signup-form'>

                <h3>Welcome to Lilies!</h3>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input type='name' placeholder='Your First Name' name='name' onChange={handleChange}/>
                    </div>
                    <div>
                        <input type='email' placeholder='Your Email address' name='email' onChange={handleChange}/>
                    </div>
                    <div>
                        <input type='password' placeholder='Your Password' name='password' onChange={handleChange}/>
                    </div>
                    <div>
                        <button>SIGN UP</button>
                    </div>
                </form>

                <div className='login-footer signup-footer'>
                    <a href='#'></a>
                    <span>Already have an account. <a href='/login'>LOGIN</a></span>
                </div>
                
            </div>

        </div>    
    </div>
  )
}

export default Signup