import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function ProtectedHome() {
    
    const navigate = useNavigate()

    function handleLogout() {
        
        navigate("/")

    }

    return (
        <div>
            <div>This is the ProtectedHome</div>
            <Link to={"/"} >
                <button onClick={() => handleLogout()}>
                    Logout
                </button>
            </Link>
        </div>
    )
}

export default ProtectedHome