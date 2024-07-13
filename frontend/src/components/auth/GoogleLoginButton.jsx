import { auth, googleProvider } from '../../config/firebase-config';
import { signInWithPopup } from "firebase/auth";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  const navigate = useNavigate();

  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((userCred) => {
        if (userCred) {
          localStorage.setItem("isAuthenticated", "true");
          
          const token = userCred.user.getIdToken();
          
          token.then(idToken => {
            Cookies.set('authToken', idToken, { expires: 1 }); 
            navigate('/');  // Navigate to home after setting the token
          });
        }
        console.log(userCred);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <button onClick={loginWithGoogle} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />
    </button>
  );
};

export default GoogleLoginButton;
