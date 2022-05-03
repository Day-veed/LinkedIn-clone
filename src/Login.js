import React, { useState } from 'react'
import "./Login.css"
//import { auth, db } from "./firebase";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
//import firebase from 'firebase/compat/app';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfile] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
    }

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!')
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(
            (userAuth) => {
                console.log(userAuth.user.updateProfile);
                this.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
            .then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        }).catch((error) => alert(error));
    };
  return (
    <div className='login'>
        <img src='https://1000logos.net/wp-content/uploads/2017/03/Font-of-the-LinkedIn-Logo.jpg' 
        alt='' />

        <form>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name (required if registering)' type="text" />

            <input value={profilePic} onChange={(e) => setProfile(e.target.value)} placeholder='Profile Pic URL (Optional)' type="text" />

            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="text" />

            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" />

            <button   type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>
            Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
    
  )
}

export default Login