import React from 'react';
import AddPostForm from './AddPostForm';



const PostForm = (props) => {

  const onSubmit = (data) => {
    props.AddPost(data.post);
  };
  return (
    <div>
        <AddPostForm onSubmit={onSubmit} />
    </div>
  );
};

export default PostForm;