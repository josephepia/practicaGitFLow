interface AudioPlayer {
    audioVolume : number;
    songDuration: number;
    song:string;
    details: Details;
}

interface Details{
    author:string;
    year:number;
}

const audioPlayer : AudioPlayer ={
    audioVolume:50,
    songDuration:34,
    song: 'Rock',
    details:{
        author: 'Ed Sheran',
        year: 2015
    }
}

//const {details: detalles} = audioPlayer;
//const song = 'new song';

//const {song:anotherSong, songDuration:duration } = audioPlayer; 

//const {details: detalles } = audioPlayer;

//const {author} = detalles;

//console.log('song:', audioPlayer.song)
//console.log(author)

const dbz : string[] = ['Goku', 'Vegeta', 'Tunks'];

console.error('personaje', dbz[3] || 'no hay personaje');


export{

}