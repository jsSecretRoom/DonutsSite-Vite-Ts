import './Authorization.scss';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';

import {auth } from '../firebaseConfig';
import { ActionTypes } from '../../redux/redaxTypes';

interface GoogleAuthorizationProps {
  txt: string;
  img: string;
  provider: any;
}

function AuthorizationWidth({ txt, img, provider }: GoogleAuthorizationProps) {

  const dispatch = useDispatch();
  const navigate = useNavigate ();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.error("You successfully authorized!");
  
      // Получите токен пользователя, например, так:
      const user = auth.currentUser;
      
      if (user) {
        const token = await user.getIdToken();
        // Сохраните токен в локальном хранилище
        localStorage.setItem('authToken', token);
        dispatch({ type: ActionTypes.SUCCESSFUL_AUTHORIZATION, payload: true });
        navigate('/', { replace: true });
      } else {
        console.error("Пользователь не аутентифицирован.");
      }
    } catch (error) {
      console.error("Ошибка!!!", error);
    }
  };
  
  
  return ( 
    <button className='aus-method' onClick={handleSignIn}>
        <img src={img} alt={txt} />
        <p>{txt}</p>
    </button>
  );
}

export default AuthorizationWidth;