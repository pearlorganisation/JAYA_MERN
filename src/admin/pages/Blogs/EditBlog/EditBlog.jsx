import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { IoIosAdd } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleBlog,
  updateBlog,
} from "../../../../features/actions/blogAction";

const EditBlog = () => {
  const editorRef = useRef(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    singleBlog: blog,
    isSuccess,
    isLoading,
    error,
  } = useSelector((state) => state.blog);

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      blogImage: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "tags",
  });

  // Fetch blog data when component mounts or id changes
  useEffect(() => {
    if (id) {
      dispatch(getSingleBlog(id));
    }
  }, [id]);

  // Reset form and set image preview when blog data is loaded
  useEffect(() => {
    if (blog) {
      reset({
        title: blog.title || "",
        description: blog.description || "",
        tags: blog.tags || [],
        blogImage: blog.blogImage || "",
      });

      // Set the image preview to the existing blog image
      if (blog.blogImage) {
        setImagePreview(blog.blogImage);
      }
    }
  }, [blog, reset]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tags", JSON.stringify(data.tags));

    // Append the new image if one is selected
    if (image) {
      formData.append("blogImage", image);
    }

    dispatch(updateBlog({ data: formData, id })).then((res) => {
      if (res?.payload?.status) {
        navigate("/admin/blog");
      }
    });
  };

  // Jodit Editor configuration
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

  return (
    <div className="container mx-auto flex flex-col justify-between p-10">
      <h1 className="text-center font-bold text-2xl text-white rounded-md bg-green-300">
        Edit Blog
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-md shadow-md p-8"
      >
        {/* Blog Image Upload */}
        <div className="mb-5">
          <label
            htmlFor="blogImage"
            className="block font-medium text-sm text-gray-700 mb-2"
          >
            Upload Blog Image
          </label>
          <input
            type="file"
            id="blogImage" // Changed to match htmlFor
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Blog Preview"
              className="w-40 h-40 object-cover mt-2 rounded-md"
            />
          )}
        </div>

        {/* Blog Title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            className={`shadow-sm bg-gray-50 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="Blog Title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Tags */}
        <div className="mb-5">
          <div className="flex flex-col gap-2 mb-2 text-sm font-medium text-gray-900">
            <p className="flex justify-start items-center">
              Tags
              <button
                type="button"
                onClick={() => append("")}
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                <IoIosAdd size={24} />
              </button>
            </p>

            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center mb-2">
                <input
                  {...register(`tags.${index}`, {
                    required: "Tag is required",
                  })}
                  className={`shadow-sm bg-gray-50 border ${
                    errors.tags?.[index] ? "border-red-500" : "border-gray-300"
                  } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                  placeholder="Tag"
                />
                {fields.length > 1 && (
                  <IoClose
                    className="text-red-500 ml-2 cursor-pointer"
                    onClick={() => remove(index)}
                    size={24}
                  />
                )}
                {errors.tags?.[index] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.tags[index].message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
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
                onChange={field.onChange}
              />
            )}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        {isLoading ? (
          <button
            disabled
            type="button"
            className="mt-5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 cursor-not-allowed"
          >
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="mt-5 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Save Blog
          </button>
        )}

        {/* Display any global errors */}
        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error.message || "An error occurred while updating the blog."}
          </p>
        )}
      </form>
    </div>
  );
};

export default EditBlog;
