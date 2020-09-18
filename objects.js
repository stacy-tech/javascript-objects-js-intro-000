var playlist ={ artistName:'stacy', songTitles:'love'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
return playlist
}
function removeFromPlaylist(the playlist object, artistName){
  delete playlist[artistName]
  return playlist
}
