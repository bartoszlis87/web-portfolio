import React from 'react';
import './Video.scss';
import video from './myVideo.mp4';

function Video() {
    return(
        <>
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"/>
            </video>
        </>
    )
}







export default Video;