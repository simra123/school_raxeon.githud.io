import React from 'react';


const IconHeading = (props) => {
   return(
    <div className="inline-flex align-middle text-primary text-lg p-2 font-sans">
        <span className="px-2 text-2xl">
            {props.icon}
        </span>
        {props.heading}
    </div>
   )
}
export default IconHeading;