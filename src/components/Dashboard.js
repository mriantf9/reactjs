import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Dashboard = () => {
    const token = localStorage.getItem('tkn')

    //* need condition for access dashboard
    if (!token) {
        return <Redirect to="/" />
    }

    return (
        <div className="conatiner">
            <h1>DASHBOARD</h1>
            <Link to="/" onClick={() => localStorage.clear()}>
                Log out
            </Link>
        </div>
    )
}

export default Dashboard