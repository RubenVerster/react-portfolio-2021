import React from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../config/FireBaseConfig';
import snarkdown from 'snarkdown';
import { RingLoader } from 'react-spinners';

const Posts = () => {
  const [blogPosts, setBlogPosts] = React.useState<any>([]);

  const convertMDtoHTML = (post: string) => snarkdown(post);

  const fetchBlogPosts = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    console.log(`firebase data`, querySnapshot.docs);
    setBlogPosts(querySnapshot.docs);
  };

  const renderBlogPosts = () => {
    if (blogPosts.length < 1)
      return (
        <div className="my-12">
          <RingLoader size={88} speedMultiplier={0.5} color="#8f2121" />
        </div>
      );
    //@ts-ignore
    return blogPosts.map((post) => {
      return (
        <div key={post.id} className="blog">
          <h3 className="blog-title">
            {post._document.data.value.mapValue.fields.title.stringValue}
          </h3>
          <h4 className="blog-subtitle">
            {post._document.data.value.mapValue.fields.subtitle.stringValue}
          </h4>
          <p
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: convertMDtoHTML(
                post._document.data.value.mapValue.fields.content.stringValue
              ),
            }}
          ></p>
        </div>
      );
    });
  };

  React.useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <section className="blogposts">
      <div className="blogposts__content">
        <h2 className="heading-primary">Blog Posts</h2>
        <div className="info-card mx-auto">
          <p>Welcome to my mini blog!</p>
          <p> Basically a glorified notes page for myself</p>
          <p>¯\_(ツ)_/¯</p>
          <br />
          <p>
            And hey, if you actually found something on here that helped you,
            I'd be more than happy to accept gratitude in the form of beer
          </p>
          <p>
            (☞ﾟヮﾟ)☞
            <a
              className="text-blue-700"
              href="https://www.paypal.com/paypalme/rubenverster"
              target="_blank"
              rel="noopener noreferrer"
            >
              My PayPal
            </a>
            ☜(ﾟヮﾟ☜)
          </p>
        </div>
        <div className="blogposts__content-blogs mx-auto p-12 flex flex-col items-center">
          {renderBlogPosts()}
        </div>
      </div>
    </section>
  );
};

export default Posts;
