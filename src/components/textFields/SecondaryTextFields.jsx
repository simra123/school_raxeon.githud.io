import React from 'react';

function SecondaryTextField(props) {

    // props to include: icon

    return (
        <div className="inline-flex w-full shadow rounded border focus:ring-1 tracking-wider ring-primary">
            <div className="max-w-7 bg-gray-200 p-2 px-3 ">
                {props.icon}
            </div>
            <div className="w-full">
                <input type="text" className="w-full border rounded-r p-1 bg-white text-gray-400 focus:ring-1 tracking-wider ring-primary focus:outline-none px-4 border-gray-300 shadow-sm" />
            </div>
        </div>
    );
}

export default SecondaryTextField;