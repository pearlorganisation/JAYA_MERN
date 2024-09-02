import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { signUp } from "../../features/actions/authAction";
import { clearUser } from "../../features/slices/authslice";

const Signup = () => {
    const { isLoading, userData } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { terms, ...rest } = data
        dispatch(signUp(rest))
        console.log(rest);
        // Handle form submission
    };
    useEffect(() => {
        if (userData?.status) {
            navigate('/signin')
            dispatch(clearUser())
        }
    }, [userData])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
            <div className="mt-10 md:border-r-2">
                <img src="login.jpg" alt="Signup" />
            </div>

            <div className="p-8 md:p-16">
                <h1 className="py-4 text-4xl font-bold text-[#315288]">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="userName" className="block mb-2 text-sm font-medium text-[#668DCB]">
                            User Name
                        </label>
                        <input
                            type="text"
                            id="userName"
                            {...register("username", { required: "User Name is required" })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Your username"
                        />
                        {errors.userName && (
                            <p className="text-red-500 text-sm">{errors.userName.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#668DCB]">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="name@company.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#668DCB]">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>



                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                {...register("terms", { required: "You must accept the terms and conditions" })}
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-light text-gray-500">
                                I accept the{" "}
                                <a href="#" className="font-medium text-primary-600 hover:underline">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </div>
                    {errors.terms && (
                        <p className="text-red-500 text-sm">{errors.terms.message}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full text-white bg-[#315288] hover:bg-[#3663ac] px-4 py-3 rounded-md"
                    >
                        Create an account
                    </button>

                    <p className="text-sm font-light text-gray-500">
                        Already have an account?{" "}
                        <Link to="/signin" className="font-medium text-blue-600 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
