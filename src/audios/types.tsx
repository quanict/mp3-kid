export interface SongType {
    id: string;
    title: string;
    path?: string;
    artist?: string;
    cover?: string;
    youbute?:string
}

export interface DaySongType {
    date: string;
    songs: Array<SongType>;
}