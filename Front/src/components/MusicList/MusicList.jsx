import React, { useState } from "react";
import styles from "./MusicList.module.css";
import { faPlay, faPause, faVolumeMute, faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MusicPlayer() {
    const [currentSong, setCurrentSong] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1);
    const [songs] = useState([
        {
            name: "Moonmen",
            url: require("./Music/1.mp3")
        },
        {
            name: "Fathers and Daughters",
            url: require("./Music/2.mp3")
        },
        {
            name: "Help me I'm gonna die",
            url: require("./Music/3.mp3")
        },
        {
            name: "Summer & Thinkles Song",
            url: require("./Music/4.mp3")
        },
        {
            name: "Glory to Glorzo",
            url: require("./Music/5.mp3")
        },
        {
            name: "Human Music",
            url: require("./Music/6.mp3")
        },
        {
            name: "Get Schwifty",
            url: require("./Music/7.mp3")
        },
        {
            name: "Camping",
            url: require("./Music/8.mp3")
        },
        {
            name: "Flu Hatin' Rap",
            url: require("./Music/9.mp3")
        },
        {
            name: "Don't Look Back",
            url: require("./Music/10.mp3")
        }
    ]);

    const handlePrev = () => {
        if(currentSong === 0){
            setCurrentSong(songs.length - 1);
        } else {
            setCurrentSong(currentSong - 1);
        }
    };

    const handleNext = () => {
        if(currentSong === songs.length - 1){
            setCurrentSong(0);
        } else {
            setCurrentSong(currentSong + 1);
        }

        const audioPlayer = document.querySelector("audio");
        if(audioPlayer.currentTime === audioPlayer.duration){
            handleNext();
        }
    }

    const handlePlay = () => {
        const audio = document.querySelector("audio");
        if(isPlaying){
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        const audio = document.querySelector("audio");
        audio.volume = newVolume;
    }

    const handleVolumeMute = () => {
        const audio = document.querySelector("audio");
        if(isMuted){
            audio.volume = volume;
            setIsMuted(false);
        } else {
            audio.volume = 0;
            setIsMuted(true);
        }
    }

    return (
        <div className={styles.mainDiv}>
            <audio src={songs[currentSong].url} autoPlay onEnded={handleNext} />
            <div className={styles.divP}>
                <p className={styles.p}>Now playing: {songs[currentSong].name}</p>
            </div>
            <div className={styles.divButton}>
                <button className={styles.button} onClick={handlePrev}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className={styles.button} onClick={handlePlay}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
                <button className={styles.button} onClick={handleNext}>
                    <FontAwesomeIcon icon={faForward} />
                </button>
                <button className={styles.button} onClick={handleVolumeMute}>
                    <FontAwesomeIcon icon={faVolumeMute} />
                </button>
                <label className={styles.input} htmlFor="volume"></label>
                <input className={styles.input} type="range" id="volume" name="volume" min="0" max="1" step="0.1" value={volume} onChange={handleVolumeChange}></input>
            </div>
        </div>
    )
}

export default MusicPlayer;