import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {

    // Can't write the below line inside any function like the goToContact function.
    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    }

    return (
        <div>
            Welcome to home
            <button onClick = {goToContact}>Go to Contact</button>
        </div>
    )
}

export default Home
