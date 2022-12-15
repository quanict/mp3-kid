import { SongType, DaySongType } from "./types";
import files from './songs.json';

const schedule = [
    {date:1230, videos:["H4SbCcFXhv8","yNfb0VhkIU4"]},
    {date:1229, videos:["uzRNQNKIxbg","yNfb0VhkIU4"]},
    {date:1228, videos:["H4SbCcFXhv8","7a26ZqjIebc"]},
    {date:1227, videos:["7a26ZqjIebc","uzRNQNKIxbg"]},
    {date:1226, videos:["H4SbCcFXhv8","uzRNQNKIxbg"]},
    
    {date:1223, videos:["23vmZ-r2RaY","qDL2HBPy9uQ"]},
    {date:1222, videos:["SGleC7edeG4","hFIaVB8Lrak"]},
    {date:1221, videos:["qDL2HBPy9uQ","23vmZ-r2RaY"]},
    {date:1220, videos:["qDL2HBPy9uQ","SGleC7edeG4"]},
    {date:1219, videos:["hFIaVB8Lrak","SGleC7edeG4"]},

    {date:1216, videos:["04KMI21kFnc","mHwz6ceMNCg"]},
    {date:1215, videos:["R69YKFmlcnA","JRMAptlBgTk"]},
    {date:1214, videos:["KwHF6mdYVzw","P8rSk4wFMdU"]},
    {date:1213, videos:["R69YKFmlcnA","KwHF6mdYVzw"]},
    {date:1212, videos:["C3c8fzbsfOE","5rdlXji2jR0"]},

    {date:1209, videos:["04KMI21kFnc","mHwz6ceMNCg"]},
    {date:1208, videos:["R69YKFmlcnA","P8rSk4wFMdU"]},
    {date:1207, videos:["C3c8fzbsfOE","5rdlXji2jR0"]},
    {date:1206, videos:["JRMAptlBgTk","KwHF6mdYVzw"]},
    {date:1205, videos:["P8rSk4wFMdU","04KMI21kFnc"]},

    {date:1202, videos:["04KMI21kFnc","mHwz6ceMNCg"]},
    {date:1201, videos:["R69YKFmlcnA","JRMAptlBgTk"]},
    {date:1130, videos:["C3c8fzbsfOE","eVbzkcKWMro"]},
    {date:1129, videos:["JRMAptlBgTk","eVbzkcKWMro"]},
    {date:1128, videos:["C3c8fzbsfOE","04KMI21kFnc"]},
];

const songs: Array<DaySongType> = [];


schedule.map((day)=>{
    const data = {date:day.date.toString(), songs :[]} as DaySongType;
    files.map((file)=>{    
        if(day.videos.includes(file.id)) {
            data.songs.push(file as SongType);
        }
    });
    songs.push(data);
});

export {songs};