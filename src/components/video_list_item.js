import React from "react";

const VideoListItem = ({ video }) => {
  const imageUrl = video.snippet.thumbnails.url;
  return (
    <li className="col-md-4 list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt="" />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title} </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
