import React, { useState, useEffect } from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar ({ onLoaded }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                const newProgress = oldProgress + 10;
                if(newProgress >= 100){
                    clearInterval(interval);
                    onLoaded();
                }
                return newProgress;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [onLoaded]);

    const messages = ["Cargando datos...", "Ajustando estilos...", "Finalizando carga...", "Listo!!!"]

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{ width: `${progress}%`}}></div>
            <div className={styles.progressMessage} style={{ animation: "progress 2s steps(1) forwards" }}>{messages[Math.floor((progress / 100) * messages.length)]}</div>
        </div>
    )
}

export default ProgressBar;