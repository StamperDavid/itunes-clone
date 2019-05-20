export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get Template() {
        return `
        <div class="card">
        <img src="${this.albumArt}">
        <h5 class="card-title">${this.artist}</h5>
        <p class="card-text">${this.collection}</p>
        <p class="card-text">${this.price}</p>
      <video controls src="${this.preview}" ></video>
        </div>
        `
    }
}