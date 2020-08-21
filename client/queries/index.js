import { gql } from '@apollo/client';

export const querySongList = gql`
  query SongList {
    songs {
      id
      title
    }
  }
`;

export const querySong = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export const mutationAddSong = gql`
  mutation addSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export const mutationDeleteSong = gql`
  mutation deleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export const mutationAddLyric = gql`
  mutation addLyricToSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export const mutationLikeLyric = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;
