import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

import React from 'react';
import Header from './header/Header.js';
import Hero from './hero/Hero.js';
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
import Video from "./video/Video.js";
import LoginForm from "./loginForm/LoginForm.js";
import logo from "./images/logo.png"
import './App.css';
import './scss/reset.scss';
import './scss/Main.scss';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App(props) {
    const {
        user,
        signOut,
        signInWithGoogle,
    } = props;
    return (
        <>
            {!user?(
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        {
                            user
                                ? <p>Hello, {user.displayName}</p>
                                : <p>Please sign in.</p>
                        }
                        {
                            user
                                ? <button onClick={signOut}>Sign out</button>
                                : <button onClick={signInWithGoogle}>Sign in with Google</button>
                        }
                    </header>
                </div>
            ):(
                <div className="site">
                <Video/>
                <div className='backgroundOpacity'>
                <LoginForm/>
                <div className='background'>
                <Header/>

                <Hero/>

                </div>

                <Projects/>
                <Contact/>
                </div>
                </div>
                )}


        </>
    )
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(App);