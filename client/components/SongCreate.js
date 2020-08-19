import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useHistory } from 'react-router-dom';
import { querySongList, mutationAddSong } from '../queries';

const SongCreate = ({ mutate }) => {
  const [title, setTitle] = useState('');
  const history = useHistory();

  const addSong = (e) => {
    e.preventDefault();

    mutate({
      variables: { title: title },
      refetchQueries: [{ query: querySongList }],
    }).then(() => history.push('/'));
  };

  return (
    <div className='container'>
      <h3>Create a New Song</h3>
      <form onSubmit={addSong}>
        <label htmlFor='title'>Song Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default graphql(mutationAddSong)(SongCreate);
