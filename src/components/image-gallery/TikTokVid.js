import React from "react";
import './ImageGallery.scss'


const TiktokVid = ({ embedId }) => (
    <>
        <div className='tiktok-video-player'>
            {/* TikTok embed using iframe with audio autoplay and unmuted */}
            <iframe
                src={`https://www.tiktok.com/embed/v2/${embedId}?lang=en-US&autoPlay=1&muted=0`}
                title="TikTok Video"
                width="100%"
                height="400px"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    </>
);

export default TiktokVid;
