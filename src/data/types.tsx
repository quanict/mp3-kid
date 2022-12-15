export interface SongType {
    id: string;
    title: string;
    path?: string;
    artist?: string;
    cover?: string;
    youbute?:string,
    author?:string
}

export interface DaySongType {
    date: string;
    songs: Array<SongType>;
}

export interface ChannelType {
    profile: string;
    name: string;
    avatar: string;
}