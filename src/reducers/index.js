import { combinedReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:30'},
        { title: 'Somebody', duration: '1:30'},
        { title: 'Something New', duration: '3:30'},
    ];
};

const selectedSongReduer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combinedReducers({ 
    songs: songsReducer, 
    selectedSong: selectedSongReduer
})