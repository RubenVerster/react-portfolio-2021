import { getAuth, signOut } from 'firebase/auth';

const Dashboard = ({ setUserLoggedIn }: any) => {
  const auth = getAuth();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUserLoggedIn(false);
      })
      .catch((error) => {
        alert(`error logging out! You're trapped forever!!!`);
        console.error(error);
      });
  };
  return (
    <div className="bg-white">
      <button onClick={() => logOut()}>LOG OUT</button>
    </div>
  );
};

export default Dashboard;
