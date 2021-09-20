import { useState } from 'react';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import db from '../../../config/FireBaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MDEditor from '@uiw/react-md-editor';

const BlogTemplate = ({ post }: any) => {
  console.log(`single post`, post);
  const [title, setTitle] = useState(
    post._document.data.value.mapValue.fields.title.stringValue
  );
  const [subtitle, setSubtitle] = useState(
    post._document.data.value.mapValue.fields.subtitle.stringValue
  );
  const [content, setContent] = useState(
    post._document.data.value.mapValue.fields.content.stringValue
  );

  const notifyUpdated = () => toast.success('Post Updated', { icon: '🔄' });
  const notifyDelete = () => toast.error('Post Deleted', { icon: '💥' });

  const updateBlog = async (e: any) => {
    e.preventDefault();

    await setDoc(doc(db, 'posts', post.id), {
      content: content,
      subtitle: subtitle,
      title: title,
    }).then(() => {
      notifyUpdated();
    });
  };

  const deleteBlog = async (e: any) => {
    e.preventDefault();
    await deleteDoc(doc(db, 'posts', post.id));
    notifyDelete();
  };

  return (
    <div className="edit-blog" key={post.id}>
      <form
        className="edit-blog__form flex flex-col"
        onSubmit={(e) => {
          updateBlog(e);
        }}
      >
        <label>Title</label>
        <input
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Subtitle</label>
        <input
          required
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
          }}
        />

        <label>Content</label>

        <MDEditor value={content} onChange={setContent} />

        <div className="edit-blog__preview">
          <h4 className="edit-blog__preview-title">Blog Preview</h4>
          <div className="bg-white rounded-md p-3 mb-6">
            <MDEditor.Markdown source={content} />
          </div>
        </div>
      </form>
      <div className="edit-blog__actions flex justify-evenly">
        <div
          className="button button-update"
          color="info"
          onClick={(e) => {
            updateBlog(e);
          }}
        >
          Update
        </div>

        <div
          className="button button-delete"
          color="danger"
          onClick={(e) => {
            deleteBlog(e);
          }}
        >
          Delete
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default BlogTemplate;
