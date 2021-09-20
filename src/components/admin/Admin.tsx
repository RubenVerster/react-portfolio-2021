import Login from './Login';
import Dashboard from './dashboard/Dashboard';
import { useState } from 'react';

const Admin = () => {
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(true);

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
