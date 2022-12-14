import { SongType } from "./types";
import files from './songs.json';

const songs: Array<SongType> = [];

files.map((file)=>{
    songs.push(file as SongType)
});

export {songs};