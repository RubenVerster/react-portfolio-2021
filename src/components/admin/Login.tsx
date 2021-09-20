import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { FaUserNinja } from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
const Login = ({ setUserLoggedIn }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitError, setSubmitError] = useState(false);

  const auth = getAuth();

  const login = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setUserLoggedIn(true);
      })
      .catch((error) => {
        setSubmitError(true);
        console.error(error);
      });
  };

  return (
    <div className="login flex flex-col items-center justify-evenly p-6">
      <form
        className="login__form flex flex-col items-center"
        autoComplete="off"
        onSubmit={(e) => login(e)}
      >
        <FaUserNinja size={77} color="#1b199b" />
        {submitError && (
          <p className="text-white text-xl">
            👀 Should I start tracking your IP? 🤔
          </p>
        )}
        <input
          required
          value={email}
          onChange={(e) => {
            setSubmitError(false);
            setEmail(e.currentTarget.value);
          }}
          type="email"
          name="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
          placeholder=""
        />
        <input
          required
          value={password}
          onChange={(e) => {
            setSubmitError(false);
            setPassword(e.currentTarget.value);
          }}
          type="password"
          name="password"
          className="form-control"
          id="exampleinput requiredPassword1"
          placeholder=""
        />
        <button type="submit" onClick={(e) => login(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
