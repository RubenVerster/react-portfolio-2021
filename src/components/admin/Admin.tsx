import Login from './Login';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth();
const Admin = () => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserLoggedIn(false);
      })
      .catch((error) => {
        // An error happened.
        alert(`error logging out! You're trapped forever!!!`);
        console.error(error);
      });
  };

  return (
    <div className="">
      {userLoggedIn ? (
        <button onClick={() => logOut()}>LOG OUT</button>
      ) : (
        <div className="container">
          <Login setUserLoggedIn={setUserLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default Admin;
