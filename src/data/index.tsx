import { SongType } from "./types";
import files from './songs.json';
import { channels } from "./Channel";

const songs: Array<SongType> = [];

files.map((file)=>{
    const song: SongType = file;
    const artist = channels.find(file.author);
    if( artist ){
        song.cover = artist.avatar;
        song.artist = artist.name;
    }
    songs.push(song)
});

export {songs};