import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { querySongList, mutationDeleteSong } from '../queries';

const SongList = ({ data, mutate }) => {
  const deleteSong = (id) => {
    mutate({ variables: { id } }).then(() => data.refetch());
  };

  const renderSongs = () => {
    return data.songs.map(({ id, title }) => {
      return (
        <li key={id} className='collection-item'>
          {title}
          <i className='material-icons right' onClick={() => deleteSong(id)}>
            delete
          </i>
        </li>
      );
    });
  };

  if (data.loading) {
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );
  }

  return (
    <div className='container'>
      <ul className='collection'>{renderSongs()}</ul>
      <Link to='/songs/new' className='btn-floating btn-large red right'>
        <i className='material-icons'>add</i>
      </Link>
    </div>
  );
};

export default graphql(mutationDeleteSong)(graphql(querySongList)(SongList));
