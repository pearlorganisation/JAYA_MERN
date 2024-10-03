import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBlogs } from "../../../../features/actions/blogAction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const editorRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const {isLoading}=useSelector(state=>state.blog )
  console.log(
    "loading",isLoading)

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      date: "",
      tags: [""],
      description: "",
      blogImage: null,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    dispatch(createBlogs(data)).then((res) => {
      console.log("page", res);
      if (res?.payload?.status) {
        navigate("/admin/blog");
      }
    });
  };


  const config = {
    readonly: false,
    height: 400,
    toolbar: true,
    buttons: [
      "bold",
      "italic",
      "underline",
      "|",
      "ul",
      "ol",
      "|",
      "outdent",
      "indent",
      "|",
      "align",
      "|",
      "link",
      "image",
      "video",
      "|",
      "source",
    ],
  };

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center font-bold text-2xl text-white rounded-md bg-green-300 mb-5">
        Add Blog
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-md shadow-md p-8"
      >
        {/* Image Upload Section */}
        <div className="mb-6">
          <label
            htmlFor="blogImage"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Upload Blog Image
          </label>
          <input
            type="file"
            id="blogImage"
            accept="image/*"
            {...register("blogImage", {
              required: "Blog image is required",
              onChange: (e) => {
                handleImageChange(e);
              },
            })}
            className={`block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100
                            ${
                              errors.blogImage
                                ? "border-red-500"
                                : "border-gray-300"
                            } 
                            rounded-lg focus:ring-blue-500 focus:border-blue-500`}
          />
          {/* Display image preview */}
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Selected"
                className="h-40 w-auto rounded-md shadow-md"
              />
            </div>
          )}
        </div>

        {/* Blog Title */}
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className={`shadow-sm bg-gray-50 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } 
                            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5`}
            placeholder="Enter blog title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Date Field
                <div className="mb-6">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        {...register('date', { required: 'Date is required' })}
                        className={`shadow-sm bg-gray-50 border ${errors.date ? 'border-red-500' : 'border-gray-300'} 
                            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                            block w-full p-2.5`}
                    />
                    {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                </div> */}

        {/* Tags Section */}
        <div className="mb-6">
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            <div className="flex items-center mb-2">
              <span>Tags</span>
              <button
                type="button"
                onClick={() => append("")}
                className="text-blue-500 hover:text-blue-700"
                title="Add Tag"
              >
                <IoIosAdd size={24} />
              </button>
            </div>

            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center mb-2">
                <input
                  {...register(`tags.${index}`, {
                    required: "Tag is required",
                  })}
                  className={`shadow-sm bg-gray-50 border ${
                    errors.tags?.[index] ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                    block w-full p-2.5`}
                  placeholder={`Tag ${index + 1}`}
                />
                {fields.length > 1 && (
                  <IoClose
                    className="text-red-500 ml-2 cursor-pointer"
                    onClick={() => remove(index)}
                    size={24}
                    title="Remove Tag"
                  />
                )}
              </div>
            ))}

            {/* Display error if any tag is missing */}
            {errors.tags &&
              Array.isArray(errors.tags) &&
              errors.tags.map(
                (tagError, index) =>
                  tagError && (
                    <p key={index} className="text-red-500 text-sm mt-1">
                      Tag {index + 1} is required.
                    </p>
                  )
              )}
          </div>
        </div>

        {/* Blog Body */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Blog Content
          </label>
          <Controller
            control={control}
            name="description"
            rules={{ required: "Content is required" }}
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
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description?.message}
            </p>
          )}
        </div>
        {isLoading ? (
          <>
          
            <button
              type="submit"
              className=" bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              ......loading
            </button>
          </>
        ) : (
          <>
          
            <button
              type="submit"
              className=" bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Save Blog
            </button>
          </>
        )}
        {/* Submit Button */}

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};

export default AddBlog;
