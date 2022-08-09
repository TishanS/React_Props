import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Child from './child';
import "./parent.css"


function Parent() {

    const [data, setData] = useState({ email: "", password: "" });
    // const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (

        <>
            <h1>Parent Component:</h1>
            <span>Share Props to Child component</span>
            <div className='login_container'>
                <div className='login_form_container'>
                    <div className='left'>
                        <form className='form_container' onSubmit={handleSubmit}>
                            <h1>Login to Your Account</h1>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                                className='input'
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                                className='input'
                            />
                            <Link to="/forgot-password" style={{ alignSelf: "flex-start" }}>
                                <p style={{ padding: "0 15px" }}>Forgot Password ?</p>
                            </Link>
                            {/* {error && <div className='error_msg'>{error}</div>} */}
                            <button type="submit" className='green_btn'>
                                Sign In
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <Child data={data} />
        </>
    )
}

export default Parent;
