var playlist ={ artistName:'stacy', songTitles:'love'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
return playlist
}
function removeFromplaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist
}
