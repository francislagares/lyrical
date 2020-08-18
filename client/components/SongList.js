import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from '@apollo/client';

const SongList = ({ data }) => {
  const renderSongs = () => {
    return data.songs.map(({ id, title }) => {
      return (
        <li key={id} className='collection-item'>
          {title}
        </li>
      );
    });
  };

  if (data.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className='collection'>{renderSongs()}</ul>
    </div>
  );
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
