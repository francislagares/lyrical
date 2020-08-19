import { gql } from '@apollo/client';

export const querySongList = gql`
  {
    songs {
      id
      title
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
