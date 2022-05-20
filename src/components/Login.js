import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const exampleUser = {
        firstName: "Ruben",
        lastName: "Zaldana",
        email: "email@email.com",
        password: "password"
    };

    const navigate = useNavigate()
    const [ user, setUser ] = useState({ firstName: "", lastName: "", email: "", password: "" })
    const [error, setError] = useState("")

    function submitHandler(e) {
        
        e.preventDefault()
        
        if (exampleUser.email === user.email && exampleUser.password === user.password) {
           
            navigate('/user-home', { state: { user } })
        
        } else {

            setError("Login information incorrect, please try again")
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner' >
                <h1>This is the Login Page</h1>
                {(error !== "") ? (<div className='error'>{error}</div>) : "" }
            </div>
            <div className="form-group">
                <label htmlFor='first-name'>First Name: </label>
                <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    onChange={e => setUser({ ...user, firstName: e.target.value })}
                    value={user.firstName}
                />
            </div>
            <div className="form-group">
                <label htmlFor='last-name'>Last Name: </label>
                <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    onChange={e => setUser({ ...user, lastName: e.target.value })}
                    value={user.lastName}
                />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name='email'
                    id='email'
                    onChange={e => setUser({ ...user, email: e.target.value })}
                    value={user.email}
                />
            </div>
            <div className='form-group'>
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name='password'
                    id='password'
                    onChange={e => setUser({ ...user, password: e.target.value })}
                    value={user.password}
                />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login