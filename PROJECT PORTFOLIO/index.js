let playlist = [

    { name: "yagnik", artist: "hindi", url: "img/WhatEver.png", src: "mp3/1.mp3" },
    { name: "raj", artist: "chindi", url: "img/Skyfall.png", src: "mp3/Tu-Meri-Main-Tera-Main-Tera-Tu-Meri-Mp3-Song-by-Anvita-Dutt-Guptan(PagalWorldi.com.co).mp3" },
];


let ielement = document.getElementById("imageplayer");
let songtitle = document.getElementById("song-title");
let songartist = document.getElementById("song-artist")
let songsrc = document.getElementById("player")
let pause = document.getElementById("pause")



let audiocontrol = document.getElementById("progress");
let parentelement = document.getElementById("ws");


currentsong = 0;

function playSong(index) {
    console.log(index);
    currentsong = index;
    ielement.src = playlist[currentsong].url;
    songtitle.textContent = playlist[currentsong].name;
    songsrc.src = playlist[currentsong].src;
    songartist.textContent = playlist[currentsong].artist;
    songsrc.play();
    pause.src = "Play/pause.png";

}





function pauseAudio(index) {
    currentsong = index;
    document.getElementById("player").pause();
    pause.src = "icons/icons8-play-50.png";

}

let isPlaying = false;

pause.addEventListener("click", () => {

    pauseAudio();
    isPlaying = false;

});

function filterSongs(playlist) {
    playlist.forEach(song => {
        let childElement = document.createElement("div");
        childElement.id = "ws1";
        document.body.appendChild(childElement);
        parentelement.appendChild(childElement);

        let imageElement = document.createElement("img");
        imageElement.setAttribute('src', song.url);
        childElement.appendChild(imageElement);

        let audioElements = document.createElement("audio");
        audioElements.setAttribute("src", song.src);
        childElement.appendChild(audioElements);



        let h3Element = document.createElement("h3");
        h3Element.textContent = song.name;
        childElement.appendChild(h3Element);

        let pElement = document.createElement("p");
        pElement.textContent = song.artist;
        childElement.appendChild(pElement);

        console.log(song.name);
        console.log(song.artist);
        console.log(song.url);
        console.log(audiocontrol.value);

        childElement.onclick = () => playSong(playlist.indexOf(song));


    });


}

filterSongs(playlist);

