import React, { Fragment, useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { IoIosAdd } from 'react-icons/io';
import { LuClipboardEdit } from 'react-icons/lu';
import { CiMedicalCross } from 'react-icons/ci';

 

const Editscheme = () => {
    // Ref to hold the editor content
    const editorRef = useRef('');
    const [dummyBenefits ,setDummyBenefits] = useState(["1000/month","70%  Reservation","Scholarship"]);

    // Function to handle content changes in the editor
    function handleChange(newContent) {
        console.log('Editor content:', newContent);
        editorRef.current = newContent;
    }
    

    function handleAdd() {
        const newBenefit = prompt("Enter new benefit:"); 
        if (newBenefit) {
            setDummyBenefits(prev => [...prev, newBenefit]);
        }
    }

    function handleDelete(index) {
        setDummyBenefits(prev => prev.filter((_, i) => i !== index));
    }


    // Jodit configuration
    const config = {
        readonly: false, // Set to true to make the editor read-only
        height: 400,
        toolbar: true,
        buttons: [
            'bold', 'italic', 'underline', '|',
            'ul', 'ol', '|',
            'outdent', 'indent', '|',
            'align', '|',
            'link', 'image', 'video', '|',
            'source'
        ],
    };

    return (
        <div className=' container mx-auto flex flex-col justify-between p-10 '>

            <h1 className='text-center font-bold text-2xl text-white rounded-md bg-green-300'>
                Edit  Scheme
            </h1>
            <form className=" h-[70vh]  p-5  ">
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scheme Title</label>
                    <textarea type="title" id="title" defaultValue="Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deparment Name</label>
                    <textarea type="department" id="department" value="Ministry of women welfare department" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <div className='flex gap-2 mb-2 text-sm font-medium items-center text-gray-900 '><p>Benefits</p> <button><IoIosAdd className='text-black hover:text-red-500' onClick={handleAdd} size={24}/></button>  </div>
                    <div className='flex p-4'>

                    
                    {
                        dummyBenefits.map((el,index)=>{
                            return(
                            <div key={index} className='flex justify-center items-center'>

                            <span key={index} className='mx-2 border-2 rounded-md font-thin p-1 bg-green-400 text-md hover:border-green-300 text-white'>
                                {el}
                              </span>
                              <div >
                              <LuClipboardEdit size={24} />
                              <CiMedicalCross onClick={()=>handleDelete(index)} size={24} />
                              </div>
                            </div>

                            );
                        })
                    }
                    </div>
                </div>


            </form>

            <JoditEditor
                value={editorRef.current}
                config={config}
                onChange={handleChange}
            />
        </div>
    );
};

export default Editscheme;
