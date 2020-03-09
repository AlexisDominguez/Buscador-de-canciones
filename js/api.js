export class Api{
   constructor(artist, song){
      this.artist = artist;
      this.song = song;
   }

   async getData(){

      const getLyrics = await fetch(`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`);

      const data = await getLyrics.json();

      return data;

   }

}