import React, { Component } from 'react'
 

const VideoDetail = ({video}) =>{
    
    if(!video){
        return <h1>loading...</h1>
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/'+ videoId;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by-9">
               <iframe className="embed-responsive-itme" src={url} ></iframe>
            </div>
            <div className="detail">
                <div>{video.snippet.title}</div> 
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;