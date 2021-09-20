import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { doc, setDoc } from 'firebase/firestore';
import db from '../../../config/FireBaseConfig';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MDEditor from '@uiw/react-md-editor';
const CreateBlog = () => {
  let [newTitle, setNewTitle] = useState('');
  let [newSubtitle, setNewSubtitle] = useState('');
  let [newContent, setNewContent] = useState('');

  const notifyCreated = () => toast.success('Post Created', { icon: '🚀' });
  const notifyError = () =>
    toast.error('Please Check Input Fields', { icon: '😡' });

  const createBlog = async (e: any) => {
    e.preventDefault();
    if (newContent === '' || newTitle === '' || newSubtitle === '') {
      return notifyError();
    }

    await setDoc(doc(db, 'posts', uuidv4()), {
      title: newTitle,
      subtitle: newSubtitle,
      content: newContent,
    }).then(() => {
      notifyCreated();
    });

    setNewContent('');
    setNewTitle('');
    setNewSubtitle('');
  };

  return (
    <div className="create-blog">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form
        className="create-blog__form flex flex-col"
        onSubmit={(e) => {
          createBlog(e);
        }}
      >
        <label htmlFor="Blog Title">Title</label>
        <input
          required
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
          name="Blog Title"
          placeholder="Title For The Blog"
        />

        <label htmlFor="Blog Subitle">Subtitle</label>
        <input
          required
          value={newSubtitle}
          onChange={(e) => {
            setNewSubtitle(e.target.value);
          }}
          name="Blog Subtitle"
          placeholder="Subitle For The Blog"
        />

        <label>Content</label>
        {/* @ts-ignore */}
        <MDEditor value={newContent} onChange={setNewContent} />
      </form>
      <div className="create-blog__preview">
        <h4 className="create-blog__preview-title">Blog Preview</h4>
        <MDEditor.Markdown source={newContent} />
        <button
          className="create-blog__preview-submit"
          onClick={(e) => createBlog(e)}
        >
          Create Blog
        </button>
      </div>
    </div>
  );
};

export default CreateBlog;
