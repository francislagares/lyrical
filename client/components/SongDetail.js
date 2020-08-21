import React from 'react';
import { graphql } from 'react-apollo';
import { querySong } from '../queries';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

const SongDetail = ({ data }) => {
  const { song } = data;

  if (!song) {
    return (
      <div className='progress'>
        <div className='indeterminate'></div>
      </div>
    );
  }

  return (
    <div className='container'>
      <h3>{song.title}</h3>
      <LyricList lyrics={song.lyrics} />
      <LyricCreate songId={song.id} />
    </div>
  );
};

export default graphql(querySong, {
  options: ({ match }) => {
    return { variables: { id: match.params.id } };
  },
})(SongDetail);
