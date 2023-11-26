const YOTUBE_WATCH_URL = "https://www.youtube.com/watch?";

const SongsManager = function() {
    const _songs = [];

    const addSong = (songName, songUrl) => {
        // extract the song id on utube & save it
        const songId = songUrl.replace(YOTUBE_WATCH_URL, "");
        _songs[songName] = songId;
    }

    const getSong = (songName) => {
        if(_songs[songName] === undefined)
            return "Unknown song :(";
        return YOTUBE_WATCH_URL + _songs[songName];
    }

    return {
        addSong,
        getSong
    }
};


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ

