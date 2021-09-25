import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowAltCircleRight } from 'react-icons/fa';

function SidebarSubtitle(props) {
    return (
        <>
            <Link to={props.link}>
                <button className="inline-flex w-full p-1 text-sm hover:text-primary">
                    <span className="pt-1 pr-2">
                        <FaArrowAltCircleRight />
                    </span>
                    {props.title}
                </button>
            </Link>
        </>
    );
}

export default SidebarSubtitle;