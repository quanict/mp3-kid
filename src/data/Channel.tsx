import profiles from './channel.json';
import { ChannelType } from './types';

export class Channels {
    readonly profiles!: Array<any>;
    constructor(){
        this.profiles = profiles;
    }

    public find(profile:string){
        let result = this.profiles.filter(function(el, i) {
            return (typeof (el.profile) !== 'undefined' && el.profile===profile);
        });
        if( result.length < 1){
            return {
                "profile":profile,
                "name":"unnamed"
            } as ChannelType;
        }
        const channel = result[0] as ChannelType;
        channel.avatar = `images/profile/${channel.profile}.jpg`
        return channel;
    }
}

const channels = new Channels();
export {channels};