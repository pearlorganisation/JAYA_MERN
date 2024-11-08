import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/actions/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const signUpSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email is required"),

  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});

const Signup = () => {
  const { userData, isLoading, isSuccess } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values, "values");
      dispatch(signUp(values));
    },
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/signin");
    }
  }, [isSuccess]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-12 px-10 ">
      <div className="lg:mt-20 mt-6 md:border-r-2">
        <img src="login.jpg" className="" />
      </div>

      <div className="p-4 md:px-8 md:py-4 lg:w-[75%] items-center justify-center">
        <h1 className="py-5 text-3xl font-bold text-[#315288]">Sign Up !</h1>
        <p className="text-base text-[#5E5E5E] font-normal pb-2">
          If you are already a member you can login with your email address and
          password.
        </p>
        <form
          className="space-y-1 md:space-y-2"
          onSubmit={formik.handleSubmit}
          action=""
        >
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-base font-medium text-[#668DCB]"
            >
              User name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={formik.values.username}
              onChange={formik.handleChange("username")}
              onBlur={formik.handleBlur("username")}
            />
            <div className="text-red-500">
              {formik.touched.username && formik.errors.username}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-[#668DCB]"
            >
              {" "}
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={formik.values.email}
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
            />
            <div className="text-red-500">
              {formik.touched.email && formik.errors.email}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-[#668DCB]"
            >
              {" "}
              Phone number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={formik.values.phoneNumber}
              onChange={formik.handleChange("phoneNumber")}
              onBlur={formik.handleBlur("phoneNumber")}
            />

            <div className="text-red-500">
              {formik.touched.phoneNumber && formik.errors.phoneNumber}
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[#668DCB]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={formik.values.password}
              onChange={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              className="bg-white border border-[#9b9b9b] text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <div className="text-red-500">
              {formik.touched.password && formik.errors.password}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                />
              </div>
              <div className=" ml-1 text-sm">
                <label
                  htmlFor="remember"
                  className="text-[#668DCB] font-medium text-base"
                >
                  Terms and Conditions
                </label>
              </div>
            </div>
          </div>

          {isLoading ? (
            <button
              disabled
              className="bg-gray-500 w-full text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Loading ...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full text-white bg-[#315288] hover:bg-[#3663ac] px-4 py-3  rounded-md mt-1 lg:mt-0"
            >
              Register Account
            </button>
          )}

          <div className="flex items-center justify-center">
            <p className="text-base font-medium text-[#696F79] mt-1 lg:mt-0 mb-4">
              Already have an account ?{" "}
              <a
                href="signup"
                className="font-medium text-[#2C73EB] hover:underline dark:text-blue-500"
              >
                Login Here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
