import React, { useState, Suspense } from 'react';
import {motion} from 'framer-motion';
const NavBar = React.lazy(() => import('../components/navbar/NavBar'));
const Footer = React.lazy(() => import('../components/sections/Footer'));

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <section>
        <Suspense fallback={<div>loading...</div>}>
        <NavBar />
        </Suspense>
            <div  className="login">


        <form className="login_form" onSubmit={handleSubmit}>
            <h1>Welcome back!</h1>
            <p>Log in to your account, purchase historty and more</p>
            <div className='login_wrapper'>
            <label>Email:</label>
            <input

                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input

                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button className='login_btn'> log in</button>
            <div className='login_redirect'>
                <p>Don't have an account ? </p>
                <a>create account</a>
            </div>
            </div>
            </form>
            </div>
<Suspense fallback={<div>loading...</div>}>
        
        <Footer />
        </Suspense>
            </section>

    )
}

export default Login