import './Authorization.scss';
import AuthorizationWidth from '../../firebase/Authorizations/AuthorizationWidth';

import { 
    googleAuthProvider, 
    // facebookAuthProvider, 
    // twitterAuthProvider, 
    // githubAuthProvider 
} from '../../firebase/firebaseConfig';

import GoogleImg from '../../assets/Google.svg'
// import FacebookImg from '../../assets/Facebook.svg'
// import TwitterImg from '../../assets/Twitter.svg'
// import GithubImg from '../../assets/Github.svg'

import { NavLink } from 'react-router-dom'; 

function Autorization() {
    let redirectUri: string = 'https://donut-site-3d27a.firebaseapp.com/__/auth/handler';
    return ( 
        <main className='aus-main'>
            <div className="autorization">
                <section className="aus-method">
                    <h4>Authorization with:</h4>
                    <AuthorizationWidth txt={'Google'} img={GoogleImg} provider={googleAuthProvider} redirectUri={redirectUri}/>
                    {/* <AuthorizationWidth txt={'Facebook'} img={FacebookImg} provider={facebookAuthProvider} redirectUri={redirectUri}/>
                    <AuthorizationWidth txt={'Twitter'} img={TwitterImg} provider={twitterAuthProvider} redirectUri={redirectUri}/>
                    <AuthorizationWidth txt={'Github'} img={GithubImg} provider={githubAuthProvider} redirectUri={redirectUri}/> */}
                </section>
                <section className="email-and-passvord">
                    <h4>or:</h4>
                    <form action="submit">
                        <input type="email" name="email" id="email" placeholder='Email'/>
                        <input type="current-password" name="current-password" id="current-password" placeholder='Password'/>
                        <div className='warning-massage'>
                            <p>I don't have an account!</p>
                            <NavLink to='/registration'>Registration!</NavLink>
                        </div>
                        
                        <button><p>Sign in</p></button>
                    </form>
                    <p>Sign up to see my project</p>
                </section>
            </div>
        </main>
        
    );
}

export default Autorization;