import React, { Fragment, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { IoIosAdd } from 'react-icons/io';
import { IoClose } from "react-icons/io5";
import { useForm, Controller, useFieldArray } from 'react-hook-form';

const CreateScheme = () => {
  const editorRef = useRef('');
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      department: '',
      benefits: [{ benefit: '' }],
      editorContent: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "benefits"
  });

  const onSubmit = data => {
    console.log('Form Data:', data);
    // Add your submission logic here
  };

  // Jodit configuration
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
        Create Scheme
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
          <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department Name</label>
          <input
            type="text"
            id="department"
            {...register('department', { required: 'Department is required' })}
            className={`shadow-sm bg-gray-50 border ${errors.department ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="Department Name"
          />
          {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>}
        </div>

        <div className="mb-5">
          <div className='flex flex-col gap-2 mb-2 text-sm font-medium text-gray-900'>
            <p className='flex justify-start items-center'>Benefits
              <button type='button' onClick={() => append({ benefit: '' })}>
                <IoIosAdd className='text-black hover:text-red-500' size={24} />
              </button>
            </p>

            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center mb-2">
                <input
                  {...register(`benefits.${index}.benefit`, { required: 'Benefit is required' })}
                  className={`shadow-sm bg-gray-50 border ${errors.benefits?.[index]?.benefit ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  placeholder="Benefit"
                />
                {
                  fields.length > 1 && <IoClose
                    className='text-red-500 ml-2 cursor-pointer'
                    onClick={() => remove(index)}
                    size={24}
                  />
                }
                {errors.benefits?.[index]?.benefit && <p className="text-red-500 text-sm mt-1">{errors.benefits[index].benefit.message}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <Controller
            control={control}
            name="editorContent"
            rules={{ required: 'Content is required' }}
            render={({ field }) => (
              <JoditEditor
                value={field.value}
                config={config}
                onBlur={field.onBlur}
                onChange={field.onChange}
              />
            )}
          />
          {errors.editorContent && <p className="text-red-500 text-sm mt-1">{errors.editorContent.message}</p>}
        </div>

        <button
          type="submit"
          className="mt-5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Save Scheme
        </button>
      </form>
    </div>
  );
};




export default CreateScheme