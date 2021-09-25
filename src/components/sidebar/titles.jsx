import React from 'react';

function SidebarTitle(props) {

    // props that need to be provided: id, title, icon, onClick, active

    if (props.active) {
        return (
            <>
                <button className="inline-flex w-full px-5 py-2 rounded-lg bg-primary-light text-primary font-sans border border-primary" onClick={props.onClick}>
                    <span className="pt-1 px-2">
                        {props.icon}
                    </span>
                    {props.title}
                    <span className="ml-auto font-normal">
                        -
                    </span>
                </button>
            </>
        );
    } else {
        return (
            <>
                <button className="inline-flex w-full px-5 py-2 rounded-lg bg-white text-secondary font-sans font-normal border border-transparent hover:text-primary hover:bg-primary-light hover:border-primary" onClick={props.onClick}>
                    <span className="pt-1 px-2">
                        {props.icon}
                    </span>
                    {props.title}
                    <span className="ml-auto font-normal">
                        +
                    </span>
                </button>
            </>
        );
    }
}

export default SidebarTitle;