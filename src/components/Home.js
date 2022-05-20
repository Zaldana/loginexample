import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h1>This is the Landing Page</h1>
            <Link to={"login"} >
                <button>Log In</button>
            </Link>
        </div>
    )
}

export default Home