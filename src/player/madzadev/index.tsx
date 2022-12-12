import { ReactSimplifiedPlayer } from "react-simplified-player"
import { PlayerProps, QueueType } from "react-simplified-player/typings/playerTypes";


function Mp3Player(props: PlayerProps) {
    let song: QueueType = {
        song_cover: "./images/cartoon-boy-harry-playing-tennis-4o7dBW5-600.jpg",
        song_title: "Clap Your Hands",
        // id: "xxxx",
        song_artist: "The Kiboomers Preschool Songs for Circle Time.",
        url: "./files/Clap Your Hands - The Kiboomers Preschool Songs for Circle Time.mp3"
    };

    return (
        <ReactSimplifiedPlayer song={song} {...props} showQueue={true} />
    );
}
  
export default Mp3Player;