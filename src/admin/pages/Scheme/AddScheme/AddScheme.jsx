import React, { Fragment, useEffect, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { IoIosAdd } from 'react-icons/io';
import { IoClose } from "react-icons/io5";
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createScheme, getScheme } from '../../../../features/actions/schemesAction';
import { useNavigate } from 'react-router-dom';

const AddScheme = () => {
    const editorRef = useRef(null);
    const { id } = useParams();
    const navigate = useNavigate();
 
  const { userData,isLoading } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            miniTitle: '',
            tags: [], 
            schemeBody: '',
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "tags",
    });

    const onSubmit = data => {
        console.log('Form Data:', data);
        data['postedBy'] = userData?.user?._id;
        // data['tags'] = data.benefits.map(item => item.benefit); 
   
        dispatch(createScheme(data)).then(res => {
            console.log("page",res)
            if (res?.payload?.status) {
                navigate('/admin/schemes');
            }
        });
    };


    const config = {
        readonly: false,
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
        <div className='container mx-auto flex flex-col justify-between p-10'>
            <h1 className='text-center font-bold text-2xl text-white rounded-md bg-green-300'>
                Add Scheme
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="h-[70vh] p-5">
              
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scheme Title</label>
                    <input
                        type="text"
                        id="title"
                        {...register('title', { required: 'Title is required' })}
                        className={`shadow-sm bg-gray-50 border ${errors.title ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="Scheme Title"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                </div>

                <div className="mb-5">
                    <label htmlFor="miniTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department Name</label>
                    <input
                        type="text"
                        id="miniTitle"
                        {...register('miniTitle', { required: 'Department Name is required' })}
                        className={`shadow-sm bg-gray-50 border ${errors.miniTitle ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                        placeholder="Department Name"
                    />
                    {errors.miniTitle && <p className="text-red-500 text-sm mt-1">{errors.miniTitle.message}</p>}
                </div>

    
                <div className="mb-5">
                    <div className='flex flex-col gap-2 mb-2 text-sm font-medium text-gray-900'>
                        <p className='flex justify-start items-center'>
                            Benefits
                            <button type='button' onClick={() => append("")} className="ml-2">
                                <IoIosAdd className='text-black hover:text-red-500' size={24} />
                            </button>
                        </p>

                        {fields.map((item, index) => (
                            <div key={item.id} className="flex items-center mb-2">
                                <input
                                    {...register(`tags.${index}`, { required: 'Benefit is required' })}
                                    className={`shadow-sm bg-gray-50 border ${
                                        errors.tags?.[index]? 'border-red-500' : 'border-gray-300'
                                    } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                                    placeholder="Benefit"
                                />
                                {fields.length > 1 && (
                                    <IoClose
                                        className='text-red-500 ml-2 cursor-pointer'
                                        onClick={() => remove(index)}
                                        size={24}
                                    />
                                )}
                                {errors.tags?.[index] && (
                                    <p className="text-red-500 text-sm mt-1">{errors.tags[index].message}</p>
                                )}  
                            </div>
                        ))}
                    </div>
                </div>

              
                <div className="mb-5">
                    <Controller
                        control={control}
                        name="schemeBody"
                        rules={{ required: 'Content is required' }}
                        render={({ field }) => (
                            <JoditEditor
                                ref={editorRef}
                                value={field.value}
                                config={config}
                                onBlur={field.onBlur}
                                onChange={(content) => field.onChange(content)}
                            />
                        )}
                    />
                    {errors.schemeBody && (
                        <p className="text-red-500 text-sm mt-1">{errors.schemeBody.message}</p>
                    )}
                </div>
{isLoading? <>
                <button
                    type="submit"
                    className="mt-5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                   .....loading
                </button></>:<>
                <button
                    type="submit"
                    className="mt-5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Save Scheme
                </button></>}
           
            </form>
        </div>
    );
};

export default AddScheme;
