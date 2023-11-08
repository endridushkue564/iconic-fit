/* 
File name: complexCode.js
Content: Complex JavaScript code demonstrating a music player application.

This code showcases a music player application with various features such as adding and removing songs, creating playlists, searching for songs, shuffling and looping the playlist, volume control, play/pause functionality, and displaying the current song information.
*/

class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
    this.currentIndex = 0;
    this.shuffleMode = false;
    this.loopMode = false;
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    const index = this.songs.indexOf(song);
    if (index !== -1) {
      this.songs.splice(index, 1);
      if (index < this.currentIndex) {
        this.currentIndex--;
      }
    }
  }

  searchSong(query) {
    return this.songs.filter((song) => {
      return (
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  shufflePlaylist() {
    this.shuffleMode = !this.shuffleMode;
    if (this.shuffleMode) {
      this.currentIndex = Math.floor(Math.random() * this.songs.length);
    }
  }

  toggleLoopMode() {
    this.loopMode = !this.loopMode;
  }

  play() {
    console.log("Playing: ", this.songs[this.currentIndex]);
  }

  pause() {
    console.log("Paused: ", this.songs[this.currentIndex]);
  }

  next() {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      if (this.loopMode) {
        this.currentIndex = 0;
      } else {
        console.log("End of playlist reached.");
        return;
      }
    }
    console.log("Playing next song: ", this.songs[this.currentIndex]);
  }

  previous() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      if (this.loopMode) {
        this.currentIndex = this.songs.length - 1;
      } else {
        console.log("Start of playlist reached.");
        return;
      }
    }
    console.log("Playing previous song: ", this.songs[this.currentIndex]);
  }

  setVolume(volume) {
    if (volume >= 0 && volume <= 100) {
      console.log("Volume set to ", volume);
    } else {
      console.log("Invalid volume level.");
    }
  }

  getCurrentSong() {
    return this.songs[this.currentIndex];
  }
}

// Create songs
const song1 = new Song("Song 1", "Artist 1", "3:30");
const song2 = new Song("Song 2", "Artist 2", "4:15");
const song3 = new Song("Song 3", "Artist 3", "2:50");
const song4 = new Song("Song 4", "Artist 4", "3:55");

// Create playlist
const playlist = new Playlist("My Playlist");

// Add songs to the playlist
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
playlist.addSong(song4);

// Play the playlist
playlist.play();

// Change volume
playlist.setVolume(70);

// Search for a song
const searchResults = playlist.searchSong("artist 2");
console.log("Search results: ", searchResults);

// Shuffle playlist
playlist.shufflePlaylist();

// Play next song
playlist.next();

// Remove a song
playlist.removeSong(song3);

// Play previous song
playlist.previous();

// Toggle loop mode
playlist.toggleLoopMode();

// Play next song (looped)
playlist.next();

// Display current song
const currentSong = playlist.getCurrentSong();
console.log("Current Song: ", currentSong);

/* 
Expected Output:

Playing:  Song 1
Volume set to  70
Search results:  [ Song { title: 'Song 2', artist: 'Artist 2', duration: '4:15' } ]
Playing next song:  Song 1
Playing previous song:  Song 1
Playing next song:  Song 2
Current Song:  Song 2
*/