import { useFormik } from "formik";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/actions/authAction";

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),

  password: yup.string().required("Password is required"),
});

const Signin = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values) => {
      dispatch(signIn(values));
      {
        /**/
      }
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:gap-12 px-10 ">
      <div className="lg:mt-20 mt-6 md:border-r-2">
        <img src="login.jpg" className="" />
      </div>

      <div className="p-4 md:p-16 lg:w-[75%] items-center justify-center">
        <h1 className="py-4 text-3xl font-bold text-[#315288]">Login !</h1>
        <p className="text-base text-[#5E5E5E] font-normal pb-4">
          If you are already a member you can login with your email address and
          password.
        </p>
        <form
          className="space-y-4 md:space-y-6"
          action=""
          onSubmit={formik.handleSubmit}
        >
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
          <div className="flex items-center justify-between mt-1 lg:mt-0">
            <div className="flex items-center justify-center">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>
              <div className=" ml-1 text-sm">
                <label
                  htmlFor="remember"
                  className="text-[#668DCB] font-medium text-base"
                >
                  Remember me
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
              Sign In
            </button>
          )}

          <div className="flex items-center justify-center">
            <p className="text-sm font-light text-[#696F79] mt-2">
              Don’t have an account ?{" "}
              <a
                href="signup"
                className="font-medium text-[#2C73EB] hover:underline dark:text-blue-500"
              >
                Sign up Here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
