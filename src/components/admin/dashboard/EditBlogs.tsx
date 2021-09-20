import { RingLoader } from 'react-spinners';
import BlogTemplate from './BlogTemplate';

const EditBlogs = ({ blogPosts }: any) => {
  const renderBlogPosts = () => {
    if (blogPosts.length < 1)
      return (
        <div>
          <RingLoader size={88} speedMultiplier={0.5} color="#1b199b" />
        </div>
      );
    //@ts-ignore
    return blogPosts.map((post) => {
      return <BlogTemplate post={post} />;
    });
  };
  return <div className="px-6">{renderBlogPosts()}</div>;
};

export default EditBlogs;
