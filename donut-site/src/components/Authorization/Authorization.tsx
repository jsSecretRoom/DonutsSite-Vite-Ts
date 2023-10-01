import './Authorization.scss';

import AuthorizationWidth from '../../firebase/Authorizations/AuthorizationWidth';

import { 
    googleAuthProvider, 
    facebookAuthProvider, 
    twitterAuthProvider, 
    githubAuthProvider 
} from '../../firebase/firebaseConfig';

import GoogleImg from '../../assets/Google.svg'
import FacebookImg from '../../assets/Facebook.svg'
import TwitterImg from '../../assets/Twitter.svg'
import GithubImg from '../../assets/Github.svg'

function Autorization() {

    return ( 
        <div className="Autorization">
            <section className="aus-method">
                <h4>Authorization with:</h4>
                <AuthorizationWidth txt={'Google'} img={GoogleImg} provider={googleAuthProvider}/>
                <AuthorizationWidth txt={'Facebook'} img={FacebookImg} provider={facebookAuthProvider}/>
                <AuthorizationWidth txt={'Twitter'} img={TwitterImg} provider={twitterAuthProvider}/>
                <AuthorizationWidth txt={'Github'} img={GithubImg} provider={githubAuthProvider}/>
            </section>
            <section className="email-and-passvord">
                <h4>or:</h4>
                <form action="submit">
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    <input type="current-password" name="current-password" id="current-password" placeholder='Password'/>
                    <p>I don't have an account!</p>
                    <button><p>Sign in</p></button>
                </form>
                <p>Sign up to see my project</p>
            </section>
        </div>
    );
}

export default Autorization;