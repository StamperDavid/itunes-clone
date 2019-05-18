import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawSongs() {
  let songs = itunesService.Songs  ///trying to determine if this controller should be accessing itunesService.songs or _state.Service.songs/my understanding of this portion of the code is that it will pull the information from the itunesService class at this point, then display to my html
  let template = ''
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i]
    template += song.Template
    document.querySelector("Template")
  }
  document.getElementById("Template").innerHTML = template



  ///////////////////////////////////not sure if I have completed the drawsongs function correctly, have instructor check it/////////////////////////////////






  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)

}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!_raceService.addSubscriber("frogs", _drawFrogs)
    itunesService.addSubscriber("songs", drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController