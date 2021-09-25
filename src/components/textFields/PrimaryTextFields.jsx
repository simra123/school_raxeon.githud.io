import React from 'react';

function PrimaryTextFields(props) {
    return (
        <input type="text" placeholder={props.placeholder} className="w-full border rounded p-1 bg-white  tracking-wider text-gray-400 focus:ring-1 ring-primary-purple focus:outline-none px-4 border-gray-300 shadow-sm" />
    );
}

export default PrimaryTextFields;