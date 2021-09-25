import React from 'react'
import { FaBlenderPhone ,FaVoicemail} from 'react-icons/fa';
import SecondaryTextField from './SecondaryTextFields';
import PrimaryTextFields from './PrimaryTextFields';
import Textarea from './Textarea';
import { GiBowlingPropulsion } from 'react-icons/gi';



function guardianTextFields() {
    return(
     <>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-3  p-4 ">
            <div className="w-full">
                <p >
                    Name <span className="text-red-600">*</span>
                    
                </p>
                    <PrimaryTextFields />
            </div>    
            <div className="w-full">
                <p >
                Relation <span className="text-red-600">*</span>
                    
                </p>
                    <PrimaryTextFields />
            </div>   
    
            <div className="w-full">
                <p >
                    Father Name
                    
                </p>
                    <PrimaryTextFields />
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-2">
         
     
            <div className="w-full">
                <p >Occupation  <span className="text-red-600">*</span>
                    
                </p>
                    <PrimaryTextFields />
            </div>    
            <div className="w-full">
                <p >Income 
                    
                </p>
                    <PrimaryTextFields />
            </div>  
            <div className="w-full">
                <p >Education
                    
                </p>
                    <PrimaryTextFields />
            </div>  
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-2">

       
            <div className="w-full">
                <p >
                    City
                    
                </p>
                    <PrimaryTextFields />
            </div>    
            <div className="w-full">
                <p >
                    State
                    
                </p>
                <PrimaryTextFields />
            </div>  
            <div className="w-full">
                <p >
                    Mobile No 
                </p>
                <SecondaryTextField icon={<FaBlenderPhone className="mx-auto" />} />
            </div>  
            <div className="w-full">
                <p >
                    Email
                    </p>
                <SecondaryTextField icon={<FaVoicemail className="mx-auto" />} />
            </div>  
        </div>     
      
            <div className="w-full px-4">
                <p >
                    Address
                </p>
                <Textarea name="adress" id="adress3" rows="1"/>
            </div>
        

        </>    
       
    );
};
export default guardianTextFields;