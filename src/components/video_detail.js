import React, { Component } from 'react'
 

const VideoDetail = ({video}) =>{

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed' +videoId;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by-9">
               <iframe className="embed-responsive-itme" src={} ></iframe>
            </div>

        </div>
    )
}

export default VideoDetail;