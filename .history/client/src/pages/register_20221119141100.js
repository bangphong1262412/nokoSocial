import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'

const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        fullname: '', username: '', email: '', password: '', cf_password: '', gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (

        <div className='log-mid'>
            <div className="container">
            <div className="forms">
                <div className="form login">
                    <span className='log_title'>
                        nokoSocial
                    </span>
                 
            <form onSubmit={handleSubmit}>
                {/* <h3 className="text-uppercase text-center mb-4">V-Network</h3> */}
                {/* <h3 className="xinchao">V-Network</h3> */}
                <div className="input-field">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="log-email" id="exampleInputEmail1" placeholder="Enter your email" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />
                     <i className="uil uil-envelope icon"></i>
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>

                <div className="input-field">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    {/* <div className="pass"> */}
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="password" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password"  placeholder="Enter your password"/>
                        <i className="uil uil-lock icon "></i>
                        {/* <i className="uil uil-eye-slash showHidePw"></i> */}
                        <span className="xin" onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </span>
                   
                   
                </div>

                {/* <span className="xin" onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                 </span> */}
                
                <div className="checkbox-text">
                        <div className="checkbox-content">
                        <input type="checkbox"/>
                            <span className="text">Remember me</span>
                        </div>
                        
                        <span className="text text-link">Forgot password?</span>
                    </div>
                
                <div className='input-field button'>
                    <button type="submit" className="btn-log"
                    disabled={email && password ? false : true}>
                        Login
                    </button>
                </div>
                
                <div className="login-signup">
                    <span className="text">Not a member? 
                    <Link to="/register" className="text-link" > Signup Now</Link>
                    </span>
                </div>
                {/* <p className="my-2">
                    You don't have an account? <Link to="/register" style={{color: "crimson"}}>Register Now</Link>
                </p> */}
            </form>
      
                </div>
            </div>
        </div>
        </div>

        // <div className="auth_page">
        //     <form onSubmit={handleSubmit}>
        //         <h3 className="text-uppercase text-center mb-4">V-Network</h3>

        //         <div className="form-group">
        //             <label htmlFor="fullname">Full Name</label>
        //             <input type="text" className="form-control" id="fullname" name="fullname"
        //             onChange={handleChangeInput} value={fullname}
        //             style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
                    
        //             <small className="form-text text-danger">
        //                 {alert.fullname ? alert.fullname : ''}
        //             </small>
        //         </div>

        //         <div className="form-group">
        //             <label htmlFor="username">User Name</label>
        //             <input type="text" className="form-control" id="username" name="username"
        //             onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
        //             style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                    
        //             <small className="form-text text-danger">
        //                 {alert.username ? alert.username : ''}
        //             </small>
        //         </div>

        //         <div className="form-group">
        //             <label htmlFor="exampleInputEmail1">Email address</label>
        //             <input type="email" className="form-control" id="exampleInputEmail1" name="email"
        //             onChange={handleChangeInput} value={email}
        //             style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
                    
        //             <small className="form-text text-danger">
        //                 {alert.email ? alert.email : ''}
        //             </small>
        //         </div>

        //         <div className="form-group">
        //             <label htmlFor="exampleInputPassword1">Password</label>

        //             <div className="pass">
                        
        //                 <input type={ typePass ? "text" : "password" } 
        //                 className="form-control" id="exampleInputPassword1"
        //                 onChange={handleChangeInput} value={password} name="password"
        //                 style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} />

        //                 <small onClick={() => setTypePass(!typePass)}>
        //                     {typePass ? 'Hide' : 'Show'}
        //                 </small>
        //             </div>

        //             <small className="form-text text-danger">
        //                 {alert.password ? alert.password : ''}
        //             </small>
        //         </div>

        //         <div className="form-group">
        //             <label htmlFor="cf_password">Confirm Password</label>

        //             <div className="pass">
                        
        //                 <input type={ typeCfPass ? "text" : "password" } 
        //                 className="form-control" id="cf_password"
        //                 onChange={handleChangeInput} value={cf_password} name="cf_password"
        //                 style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}} />

        //                 <small onClick={() => setTypeCfPass(!typeCfPass)}>
        //                     {typeCfPass ? 'Hide' : 'Show'}
        //                 </small>
        //             </div>

        //             <small className="form-text text-danger">
        //                 {alert.cf_password ? alert.cf_password : ''}
        //             </small>
        //         </div>

        //         <div className="row justify-content-between mx-0 mb-1">
        //             <label htmlFor="male">
        //                 Male: <input type="radio" id="male" name="gender"
        //                 value="male" defaultChecked onChange={handleChangeInput} />
        //             </label>

        //             <label htmlFor="female">
        //                 Female: <input type="radio" id="female" name="gender"
        //                 value="female" onChange={handleChangeInput} />
        //             </label>

        //             <label htmlFor="other">
        //                 Other: <input type="radio" id="other" name="gender"
        //                 value="other" onChange={handleChangeInput} />
        //             </label>
        //         </div>
                
        //         <button type="submit" className="btn btn-dark w-100">
        //             Register
        //         </button>

        //         <p className="my-2">
        //             Already have an account? <Link to="/" style={{color: "crimson"}}>Login Now</Link>
        //         </p>
        //     </form>
        // </div>
    )
}

export default Register
