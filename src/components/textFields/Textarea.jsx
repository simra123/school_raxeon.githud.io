import React from 'react'

const Textarea = (props) => {
    return(
        <> 
        <textarea name={props.name} id={props.id} className="w-full border rounded p-1 text-gray-400 tracking-r bg-white  focus:ring-1 ring-primary-purple focus:outline-none px-4 border-gray-300 shadow-sm"  rows={props.rows}></textarea>
        </>
    )
}
export default Textarea;