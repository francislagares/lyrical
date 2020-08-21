import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { mutationAddLyric } from '../queries';

const LyricCreate = ({ songId, mutate }) => {
  const [content, setContent] = useState('');

  const addLyric = (e) => {
    e.preventDefault();

    mutate({ variables: { songId, content } }).then(() => {
      setContent('');
    });
  };

  return (
    <div>
      <form onSubmit={addLyric}>
        <label>Add a Lyric</label>
        <input
          type='text'
          id='title'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </div>
  );
};

export default graphql(mutationAddLyric)(LyricCreate);
