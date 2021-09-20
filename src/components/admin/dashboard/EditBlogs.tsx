import { RingLoader } from 'react-spinners';
import snarkdown from 'snarkdown';

const EditBlogs = ({ blogPosts }: any) => {
  const convertMDtoHTML = (post: string) => snarkdown(post);

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
  return <div className="edit-blog">{renderBlogPosts()}</div>;
};

export default EditBlogs;
