import Song from "../../models/Song.js";
//             baseURL: 'https://swapi.con/api/people'

let _state = {
  songs: []
}

let _subscribers = {
  songs: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

//DO NOT MODIFY
class ItunesService {
  get Songs() {
    return _state.songs
  }

  getMusicByArtist(artist) {
    var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
    // @ts-ignore
    $.getJSON(url)
      .then(res => {
        let results = res.results.map(s => new Song(s))
        setState('songs', results)
      })
      .catch(err => console.log(err))
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }
}

//   getApiCharaceters(){
//        _api.get('people)
//            .then(response =>{
//              let data = response.data
//                      console.log(data))
//               .catch(err=)
//                  console.error(err)
//}

export default ItunesService

//register subscribers
//fetch data
// _chaService.getApiCharacters;