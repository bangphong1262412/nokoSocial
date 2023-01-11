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
            <div className="forms forms-reg">
                <div className="form register">
                    <span className='log_title'>
                        nokoSocial
                    </span>
                    
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="" id="fullname" name="fullname"
                    onChange={handleChangeInput} value={fullname}
                    style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="">
                        {alert.fullname ? alert.fullname : ''}
                    </small>
                </div>

                <div className="input-field">
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="" id="username" name="username"
                    onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
                    style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="">
                        {alert.username ? alert.username : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="" id="exampleInputEmail1" name="email"
                    onChange={handleChangeInput} value={email}
                    style={{background: `${alert.email ? '#fd2d6a14' : ''}`}} />
                    
                    <small className="">
                        {alert.email ? alert.email : ''}
                    </small>
                </div>

                <div className="">
                    <label htmlFor="exampleInputPassword1">Password</label>

                    <div className="">
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password"
                        style={{background: `${alert.password ? '#fd2d6a14' : ''}`}} />

                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>

                    <small className="">
                        {alert.password ? alert.password : ''}
                    </small>
                </div>

                <div className="">
                    <label htmlFor="cf_password">Confirm Password</label>

                    <div className="">
                        
                        <input type={ typeCfPass ? "text" : "password" } 
                        className="" id="cf_password"
                        onChange={handleChangeInput} value={cf_password} name="cf_password"
                        style={{background: `${alert.cf_password ? '#fd2d6a14' : ''}`}} />

                        <small onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ? 'Hide' : 'Show'}
                        </small>
                    </div>

                    <small className="">
                        {alert.cf_password ? alert.cf_password : ''}
                    </small>
                </div>

                <div className="">
                    <label htmlFor="male">
                        Male: <input type="radio" id="male" name="gender"
                        value="male" defaultChecked onChange={handleChangeInput} />
                    </label>

                    <label htmlFor="female">
                        Female: <input type="radio" id="female" name="gender"
                        value="female" onChange={handleChangeInput} />
                    </label>

                    <label htmlFor="other">
                        Other: <input type="radio" id="other" name="gender"
                        value="other" onChange={handleChangeInput} />
                    </label>
                </div>
                
                <button type="submit" className="">
                    Register
                </button>

                <p className="">
                    Already have an account? <Link to="/" style={{color: "crimson"}}>Login Now</Link>
                </p>
            </form>
        
                </div>
            </div>
            </div>
        </div>

       
    )
}

export default Register
