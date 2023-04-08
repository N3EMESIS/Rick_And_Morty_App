import React, { useState } from "react";
import styles from "./MusicList.module.css";
import { faPlay, faPause, faVolumenMute, faBackward, faForward } from "@fortawesome/fontawesome-free";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MusicPlayer() {
    const [currentSong, setCurrentSong] = useState(0);
    const [songs, setSongs] = useState([
        {
            name: "Moonmen",
            url: "./Music/1.mp3"
        },
        {
            name: "Fathers and Daughters",
            url: "./Music/2.mp3"
        },
        {
            name: "Help me I'm gonna die",
            url: "./Music/3.mp3"
        },
        {
            name: "Summer & Thinkles Song",
            url: "./Music/4.mp3"
        },
        {
            name: "Glory to Glorzo",
            url: "./Music/5.mp3"
        },
        {
            name: "Human Music",
            url: "./Music/6.mp3"
        },
        {
            name: "Get Schwifty",
            url: "./Music/7.mp3"
        },
        {
            name: "Camping",
            url: "./Music/8.mp3"
        },
        {
            name: "Flu Hatin' Rap",
            url: "./Music/9.mp3"
        },
        {
            name: "Don't Look Back",
            url: "./Music/10.mp3"
        }
    ]);

    function handlePrev (){
        if(currentSong === 0){
            setCurrentSong(songs.length - 1);
        } else {
            setCurrentSong(currentSong - 1);
        }
    };

    function handleNext (){
        if(currentSong === songs.length - 1){
            setCurrentSong(0);
        } else {
            setCurrentSong(currentSong + 1);
        }
    }

    function handlePlay (){
        const audio = document.querySelector("audio");
        if(audio.paused){
            audio.play();
        } else {
            audio.pause();
        }
    }

    return (
        <div className={styles.mainDiv}>
            <audio src={songs[currentSong].url} autoPlay controls />
        </div>
    )
}

export default MusicPlayer;