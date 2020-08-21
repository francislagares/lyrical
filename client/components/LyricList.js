import React from 'react';
import { graphql } from 'react-apollo';
import { mutationLikeLyric } from '../queries';

const LyricList = ({ lyrics, mutate }) => {
  const like = (id, likes) => {
    mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1,
        },
      },
    });
  };

  const renderLyrics = () => {
    return lyrics.map(({ id, content, likes }) => {
      return (
        <li className='collection-item' key={id}>
          {content}
          <div className='vote-box'>
            <i className='material-icons' onClick={() => like(id, likes)}>
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      );
    });
  };

  return <ul className='collection'>{renderLyrics()}</ul>;
};

export default graphql(mutationLikeLyric)(LyricList);
