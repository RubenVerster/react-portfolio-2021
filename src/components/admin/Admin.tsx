import Login from './Login';
import Dashboard from './dashboard/Dashboard';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Admin = () => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const checkIfUserLoggedIn = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoggedIn(true);
      } else {
        setUserLoggedIn(false);
      }
    });
  };
  useEffect(() => {
    checkIfUserLoggedIn();
  }, []);

  return (
    <div className="">
      {userLoggedIn ? (
        <Dashboard setUserLoggedIn={setUserLoggedIn} />
      ) : (
        <div className="container">
          <Login setUserLoggedIn={setUserLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default Admin;
