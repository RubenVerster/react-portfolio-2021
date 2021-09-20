import { useState, useEffect } from 'react';

import { getAuth, signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../config/FireBaseConfig';

import EditBlogs from './EditBlogs';
import CreateBlog from './CreateBlog';

const Dashboard = ({ setUserLoggedIn }: any) => {
  const [blogPosts, setBlogPosts] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState('blogs');

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    setBlogPosts(querySnapshot.docs);
  };

  const logOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserLoggedIn(false);
      })
      .catch((error) => {});
  };

  const renderPage = () => {
    if (currentPage === 'blogs') {
      return <EditBlogs blogPosts={blogPosts} />;
    } else {
      return <CreateBlog />;
    }
  };

  return (
    <div className="dashboard my-6">
      <div className="dashboard__nav container mx-auto flex flex-col md:flex-row bg-white text-center">
        <div
          className={`w-12/12 md:w-5/12 dashboard__nav__item ${
            currentPage === 'blogs' && 'dashboard__nav-active'
          }`}
          onClick={() => {
            setCurrentPage('blogs');
          }}
        >
          Edit Blogs
        </div>
        <div
          className={`w-12/12 md:w-5/12 dashboard__nav__item ${
            currentPage === 'create' && 'dashboard__nav-active'
          }`}
          onClick={() => {
            setCurrentPage('create');
          }}
        >
          Create A Blog
        </div>
        <div
          onClick={() => logOut()}
          className="w-12/12 md:w-2/12 dashboard__nav__item"
        >
          LOG OUT
        </div>
      </div>
      <div className="dashboard__page p-6 container mx-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default Dashboard;
