var playlist ={ artistName:'stacy', songTitles:'love'}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]=songTitle
  return playlist
}
