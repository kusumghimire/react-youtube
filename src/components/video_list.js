import React from "react";
import VideoListItem from "./video_list_item";

const Videolist = (props) => {
  const videoItem = props.videos.map((video) => {
    return <VideoListItem video={video} key={video.etag} />;
  });
  // return <div className="col-md-4 list-group">{videoItem}
  // </div>;
 return(
   <ul className="col-md-4 list-group">
     {videoItem}
   </ul>
 )

};

export default Videolist;
