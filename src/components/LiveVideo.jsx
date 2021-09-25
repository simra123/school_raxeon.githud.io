import React from 'react';

import {FaVideo} from 'react-icons/fa'

const LiveVideo = () => {
  return(
    <div className="bg-red-500 rounded inline-flex text-white w-full p-4 my-6 ">
    <span className="pt-1 text-lg pr-4"><FaVideo/></span>  <p className="text-sm font-medium pt-1"> Live Classes Features is available, For Demo Goto "Live Class Rooms" (Supports Video And Audio, Share Screen, Live Chat, Meeting Schedule).</p>
  </div>
      
  )
}
export default LiveVideo;