import './Authorization.scss';
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetAutorisation } from '../../redux/Actions/BooleanActions';

import { auth } from '../firebaseConfig';


interface GoogleAuthorizationProps {
  txt: string;
  img: string;
  provider: any;
  // redirectUri: string;
}

function AuthorizationWidth({ txt, img, provider }: GoogleAuthorizationProps) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        dispatch(SetAutorisation(true));
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
      {'=clic=>'}<img src={img} alt={txt} />
      <p>{txt}</p>
    </button>
  );
}

export default AuthorizationWidth;