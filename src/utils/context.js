import { createContext, useReducer } from "react";

export const context = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_IS_MODAL_VISIBLE":
			return {
				...state,
				isModalVisible: action.payload,
			};
		case "SET_IS_DRAWER_VISIBLE":
			return {
				...state,
				isDrawerVisible: action.payload,
			};
		case "SET_WINDOW_SIZE":
			return {
				...state,
				windowDimention: {
					...state.windowDimention,
					winWidth: action.payload.winWidth,
					winHeight: action.payload.winHeight,
				},
			};
	}
};

const State = (props) => {
	const initialState = {
		windowDimention: {
			winWidth: 0,
			winHeight: 0,
		},
		isModalVisible: false,
		isDrawerVisible: false,
		menu: [
			{ key: 1, route: "about", label: "Обо мне" },
			{ key: 3, route: "skills", label: "Навыки" },
			{ key: 2, route: "projects", label: "Проекты" },
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

	const [state, dispatch] = useReducer(reducer, initialState);

	const toggleModal = (bool) =>
		dispatch({ type: "SET_IS_MODAL_VISIBLE", payload: bool });
	const toggleDrawer = (bool) =>
		dispatch({ type: "SET_IS_DRAWER_VISIBLE", payload: bool });
	const setWindowSize = (obj) =>
		dispatch({ type: "SET_WINDOW_SIZE", payload: obj });

	return (
		<context.Provider
			value={{
				winWidth: state.winWidth,
				winHeight: state.winHeight,
				windowDimention: state.windowDimention,

				menu: state.menu,
				isModalVisible: state.isModalVisible,
				isDrawerVisible: state.isDrawerVisible,
				toggleModal,
				toggleDrawer,
				setWindowSize,
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
