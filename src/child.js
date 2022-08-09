import React from 'react'

function Child({ data }) {
    console.log(data.email, data.password);
    return (
        <>
            <h1> Child Component: </h1> <br />
            <div> Email: &nbsp; {data.email} </div>
            <div> Password: &nbsp;  {data.password}</div>

        </>
    )
}

export default Child;
