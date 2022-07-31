import { createContext, useReducer } from 'react';

export const context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
  }
};

const State = (props) => {
  const initialState = {
    // token: '',
    // tokenIsSet: false,
    // urlIsSet: false,
    menu: [
      { key: 1, route: 'about', label: 'Обо мне' },
      { key: 2, route: 'projects', label: 'Проекты' },
      { key: 3, route: 'skills', label: 'Навыки' },
    ],
    // mySavedAlbums: [],
    // mySavedTracks: [],
    // playlistItems: [],
    // artistAlbums: [],
    // relatedArtists: [],
    // playlist: null,
    // album: null,
    // artist: null,
    // albumId: '',
    // searchResult: null,
    // user: '',
    // total: [],
  };

  const [state] = useReducer(reducer, initialState);

  return (
    <context.Provider
      value={{
        menu: state.menu,
        // tokenIsSet: state.tokenIsSet,
        // playlists: state.playlists,
        // playlist: state.playlist,
        // album: state.album,
        // artist: state.artist,
        // user: state.user,
        // searchResult: state.searchResult,
        // mySavedAlbums: state.mySavedAlbums,
        // mySavedTracks: state.mySavedTracks,
        // playlistItems: state.playlistItems,
        // artistAlbums: state.artistAlbums,
        // relatedArtists: state.relatedArtists,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default State;
