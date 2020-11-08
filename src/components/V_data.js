import React from 'react';
import { Redirect, Link } from 'react-router-dom';


const V_data = () => {
    const token = localStorage.getItem('tkn')

    //* need condition for access dashboard
    if (!token) {
        return <Redirect to="/" />
    }


    return (
        <div className="container">
            <h1 className="text-center">View Data</h1>
            <div className="col-md-3">
                <Link to="/" onClick={() => localStorage.clear()}>
                    Logout
                </Link>

                {/* <button className="btn btn-md btn-primary" onClick={() => localStorage.clear()}>
                    Logout
                </button> */}
            </div>
            <div className="col-md-3">
                <Link to="/dashboard">
                    Dashboard
                    </Link>
            </div><br />
        </div>
    )
}

export default V_data