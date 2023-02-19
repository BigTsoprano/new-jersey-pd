import React, { useState, Suspense } from 'react';
import {motion} from 'framer-motion';
import { useSignup } from '../hooks/useSignup';
const NavBar = React.lazy(() => import('../components/navbar/NavBar'));
const Footer = React.lazy(() => import('../components/sections/Footer'));




const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(email, password)


    }
     


    return (
        <section>
        <Suspense fallback={<div>loading...</div>}>
        <NavBar />
        </Suspense>
        <div className="signup">
        <form className="signup_form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <p>Sign up to your account, purchase historty and more</p>
            <div className='signup_wrapper'>
            <label>email:</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>password:</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button disabled={isLoading} className='signup_btn'>Sign Up</button>
            {error && <div className='error'><p> {error}</p> </div>}
            <div className='signup_redirect'>
                <p>Already have an account ? </p>
                <a>log in</a>
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

export default Signup
