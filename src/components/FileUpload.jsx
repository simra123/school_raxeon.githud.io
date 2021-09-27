import React, { useState } from 'react';



const FileUpload = ( props) => {
  const [fileName , setFileName] = useState('Choose Image')
  const [remove , setRemove] = useState('')
  const [bgColor , setBgColor] = useState('')
  const [bgLabel , setBgLabel] = useState('')
   
    
const  handleselectedFile = (event) => {
 
    
    const  imageName = URL.createObjectURL(event.target.files[0]);
    setFileName(imageName)
    console.log(event)
    const svg = document.getElementById(props.id1)
    const output = document.getElementById(props.id2)

    if(fileName){
      svg.classList.add('hidden');
      output.classList.remove('hidden');
      setRemove('remove');
      setBgColor('rgba(108, 99, 252)');
      setBgLabel('white');

      
     

    }else{
   

    }

    
    };
    const handleImgRemove = () =>{
      const output = document.getElementById(props.id2)
      const svg = document.getElementById(props.id1)
      if (fileName){
        setRemove('')
        setBgColor('')
        setBgLabel('white')

        output.classList.add('hidden');
        svg.classList.remove('hidden')
       
      }
    }
   
  return(
    <div className=" grid grid-cols-1  pb-5 px-4 mt-4 " >
        <div className="w-full ">
        <label style={{backgroundColor:bgLabel}} className=" flex-col ring-1 ring-purple-400  text-blue-700 rounded-lg shadow-lg h-60 place-items-center border align-middle flex justify-center cursor-pointer hover:bg-purple-100" >
          <svg className="w-2/6 h-2/6 " fill="#D3D3D3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id={props.id1}>
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <img id={props.id2} width="50%"  className="hidden h-3/4" src={fileName} />
    
          <input type='file'data-show-upload="true" className="hidden"  onChange={handleselectedFile} id={props.id} data-show-caption="true"/>
          <button id="removeimg "  style={{backgroundColor:bgColor}} className="text-white rounded-md px-3 py-1 my-2" onClick={handleImgRemove}> {remove} </button>
                
        </label>
        </div>
    </div>
  );

}

export default FileUpload;
