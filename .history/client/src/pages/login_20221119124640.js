import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className='log-mid'>
            <div className="container">
            <div className="forms">
                <div className="form_login">
                    <span className="log_title">
                        nokoSocial
                    </span>
                    <div className="auth_page">
            <form onSubmit={handleSubmit}>
                {/* <h3 className="text-uppercase text-center mb-4">V-Network</h3> */}
                {/* <h3 className="xinchao">V-Network</h3> */}
                <div className="input-field">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="log-email" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />
                     <i class="uil uil-envelope icon"></i>
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="input-field">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    {/* <div className="pass"> */}
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="password" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password" />
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    {/* </div> */}
                   
                </div>
                
                <div className='input-field button'>
                    <button type="submit" className="btn-log"
                    disabled={email && password ? false : true}>
                        Login
                    </button>
                </div>
                

                <p className="my-2">
                    You don't have an account? <Link to="/register" style={{color: "crimson"}}>Register Now</Link>
                </p>
            </form>
        </div>
                </div>
            </div>
        </div>
        </div>
       
    )
}

export default Login
