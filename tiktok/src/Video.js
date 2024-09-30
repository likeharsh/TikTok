import React from 'react';
import "./Video.css";

function Video() {
  return (
    <div className='video'>
     <video controls> <source src="https://vimeo.com/123456789.mp4" type="video/mp4" /></video>
    </div>
  );
}

export default Video;
